let path = require("path");
let Webpack = require("webpack");
let { merge } = require("webpack-merge");
let configCommon = require("./webpack.config.common.js");
let myConfig = require("./webpack.config.my.js");
let restrictConfig = require("./restrict.config.js");
let currentConfig = {
  // 开发环境开启缓存
  cache: true,
  devtool: "eval-source-map",
  watch: true,
  // 监听文件改动，增量编译
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/,
  },
  optimization: {
    moduleIds: "named",
    chunkIds: "named",
    // 副作用
    // sideEffects: "flag",
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  // 限制并行处理的模块数量。可以用于调优性能或获取更可靠的性能分析结果
  // parallelism: 100,
  // profile: true,
  // watchOptions: {
  //     poll: 1000,
  //     aggregateTimeout: 600,
  //     ignored: /node_modules|\.cache/,
  // },
  plugins: [
    //
    new Webpack.HotModuleReplacementPlugin(),
  ],
};
let config = merge(configCommon, currentConfig, restrictConfig.webpack.dev);
module.exports = config;
