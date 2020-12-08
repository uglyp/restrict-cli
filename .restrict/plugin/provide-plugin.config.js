// 自带模块
let _ = require("lodash");
// 自带库枚举
let pluginMap = {
  lodash: {
    _: "lodash",
  },
  dayjs: {
    dayjs: "dayjs",
  },
};
let restrictConfig = require("../restrict.config.js");
let propObject = {};
if (_.isObject(restrictConfig.lib)) {
  for (let prop in restrictConfig.lib) {
    if (restrictConfig.lib.hasOwnProperty(prop) && pluginMap[prop]) {
      propObject = { ...propObject, ...pluginMap[prop] };
    }
  }
}
module.exports = propObject;
