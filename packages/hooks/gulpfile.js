const commonConfig =  require('../../gulpfile');
const gulp = require('gulp');
const fs = require('fs');
const fse = require('fs-extra');
const fg = require("fast-glob");//类似于fs的升级版
const gm = require('gray-matter');
const { async } = require('fast-glob');
async function genDesc(mdPath){
    if(!fs.existsSync(mdPath)){
        return
    }
    const mdFile = fs.readFileSync(mdPath,'utf-8');
    const {content} = gm(mdFile);
    let description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';
    description = description.trim();
    return description
}    
//添加一个hooks的文档声明
async function genMetaData(){
    //收集meta描述
    const metaData={
        function:[]
    };
    //获取src 下 use* 目录名，map循环遍历去除src/路径前缀,排序
    const hooks = fg.sync('src/use*',{
        onlyDirectories:true
    }).map((hooks)=>hooks.replace('src/','')).sort();
    // console.log(hooks) [ 'useToggle' ]
    await Promise.allSettled(
        hooks.map(async (hook)=>{
            const description = await genDesc(`src/${hook}/index.md`);
            return {
                name: hook,
                description
            }
        })
        ).then((res)=>{
            metaData.function = res.map((item)=>{
                if(item.status === 'fulfilled'){
                    return item.value
                }
                return null
            })
        })
    return metaData;
}
gulp.task('metaData', async function(){
    const metaData = await genMetaData();
    await fse.writeJson('metadata.json', metaData, { spaces: 2 });
})
exports.default = gulp.series(commonConfig.default,'metaData');