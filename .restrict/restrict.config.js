// 自带模块
let path = require("path");
let fs = require("fs-extra");
let _ = require("lodash");
let myConfig = require("./webpack.config.my.js");
let restrictConfigPath = path.resolve(myConfig.rootDir, "restrict.config.js");
let restrictConfig = {
  /**
   * 描述：是否开启手机自适应模式
   * 默认值：false
   */
  px2viewport: {
    enable: false,
  },
  /**
   * 描述：本地开发模式配置
   * 默认值：{}
   */
  devServer: {},
  /**
   * 默认自带库
   */
  providePlugin: {
    _: "lodash",
  },
  /**
   * 自定义webpack相关配置
   * loader 和 plugin 相关配置不支持在以下 webpack 属性中配置
   */
  webpack: {
    // 通用配置
    common: {},
    // 开发配置
    dev: {},
    // 发布配置
    pro: {},
    // 实验配置
    lab: {},
  },
};
if (fs.existsSync(restrictConfigPath)) {
  let restrictConfig2 = require(restrictConfigPath);
  if (_.isObject(restrictConfig2)) {
    restrictConfig = _.merge(restrictConfig, restrictConfig2);
  }
}
module.exports = restrictConfig;
