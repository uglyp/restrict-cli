# restrict-cli

> 快速的高性能的单页脚手架


## 仓库

[码云](https://gitee.com/uglyp/restrict-cli)

[github](https://github.com/uglyp/restrict-cli)

## 概述

`restrict` 可以帮你快速生成项目开发骨架，不同于 `vue-cli`，`restrict` 不会给你太多选择。`restrict` 崇尚的是【约定大于配置】的开发理念，所有的一切，都已经准备好了。你所需要做的就是——撸起袖子加油干！

## 定位

`restrict` 的定位，介于 `vue-cli` 这种没有明确的，比较自由的项目组织结构开发方式和 `vue-element-admin` 这种拿来就用，无需重头写页面代码和数据对接逻辑的项目成品之间的项目开发 `脚手架`。旨在提供规范度更高的【项目组织方式】和更为自由的【代码开发方式】。

## 声明

`restrict` 致力于解决中小型项目的快速开发和维护问题，不建议大型项目使用（作者没做过大型项目验证），请谨慎调研再做决定。

## 特性

- 约定俗成的项目结构和配置，尽量减少选择，提高开发效率和团队合作效率。
- 约定俗成的路由组织方式，无需进行手动路由引入，默认自动加载。
- 命令式一键生成页面和组件相关的文件，无需手动创建。
- 默认多实例`ajax`请求封装，满足多个接口服务器需求，横向扩展方便。
- 默认支持【可选链】和【双问号】JavaScript 特性，无需再配置。
- 默认支持模块热加载，提高开发效率，减少编译时间。
- 精心优化的`webpack`配置，编译项目更快，更高，更强，比`vue-cli`搭建同类型项目编译时间快 10 倍。
- 提供`restrict.config.js`开发配置文件，自由随心，满足特定需求。
- 自带编译后打包模块分析选项，可快速直观排查发布项目打包问题。
- 真\*脚手架。项目只需安装`vue`,`vue-router`,`vuex`等项目依赖模块，无需引入 webpack babel 等开发模块，瞬间安装。
- 项目组织干净，整洁，坚决抵制乱七八糟的模块导入和配置。
- 提供开发环境和发布环境变量文件，无需手动管理开发环境和发布环境的请求地址等相关问题。
- 默认提供全局的 vuex 存储方法，一个方法，搞定所有的 vuex 数据存储问题。
- 项目模板自带浏览器存储封装，可直接在浏览器存取对象。
- 默认已配置好浏览器差异重置，无需再重置 css。
- 默认已配置 css 兼容性前缀，js 转译 ES5，放心写业务代码即可。
