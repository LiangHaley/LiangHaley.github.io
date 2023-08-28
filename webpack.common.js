/*
 * @Author: Jack11023 1018719623@qq.com
 * @Date: 2023-08-20 11:08:59
 * @LastEditors: Jack11023 1018719623@qq.com
 * @LastEditTime: 2023-08-27 15:15:26
 * @FilePath: \encode-hooks-1.0c:\Users\MS\Desktop\project\PnpmReact\webpack.common.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  output: {
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  //    publicPath: '/pnpmProject/',
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js'],
  },
};
