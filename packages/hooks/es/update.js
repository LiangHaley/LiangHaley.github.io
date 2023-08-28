import { __awaiter, __generator } from "tslib";
var Updater = /** @class */function () {
  function Updater(options) {
    this.oldScript = [];
    this.newScript = [];
    this.dispatch = {};
    this.init(); //初始化
    this.timing(options === null || options === void 0 ? void 0 : options.timer); //轮询
  }

  Updater.prototype.init = function () {
    return __awaiter(this, void 0, void 0, function () {
      var html;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.getHtml()];
          case 1:
            html = _a.sent();
            this.oldScript = this.parserScript(html);
            return [2 /*return*/];
        }
      });
    });
  };

  Updater.prototype.getHtml = function () {
    return __awaiter(this, void 0, void 0, function () {
      var html;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch('/').then(function (res) {
              return res.text();
            })];
          case 1:
            html = _a.sent();
            console.log('html', html);
            return [2 /*return*/, html];
        }
      });
    });
  };
  Updater.prototype.parserScript = function (html) {
    var reg = new RegExp(/<script(?:\s+[^>]*)?>(.*?)<\/script\s*>/ig); //script正则
    return html.match(reg); //匹配script标签
  };
  //发布订阅通知
  Updater.prototype.on = function (key, fn) {
    (this.dispatch[key] || (this.dispatch[key] = [])).push(fn);
    return this;
  };
  Updater.prototype.compare = function (oldArr, newArr) {
    var base = oldArr.length;
    var arr = Array.from(new Set(oldArr.concat(newArr)));
    //如果新旧length 一样无更新
    if (arr.length === base) {
      this.dispatch['no-update'].forEach(function (fn) {
        fn();
      });
    } else {
      //否则通知更新
      this.dispatch['update'].forEach(function (fn) {
        fn();
      });
    }
  };
  Updater.prototype.timing = function (time) {
    var _this = this;
    if (time === void 0) {
      time = 10000;
    }
    //轮询
    setInterval(function () {
      return __awaiter(_this, void 0, void 0, function () {
        var newHtml;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, this.getHtml()];
            case 1:
              newHtml = _a.sent();
              this.newScript = this.parserScript(newHtml);
              this.compare(this.oldScript, this.newScript);
              return [2 /*return*/];
          }
        });
      });
    }, time);
  };
  return Updater;
}();
export { Updater };
export default Updater;