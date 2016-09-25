# Angular 2 快速指南

把项目克隆下来后，按顺序运行如下命令，即可启动：

```
npm install
$(npm bin)/typings install --global --save dt~core-js
npm run serve
// 通过浏览器访问：http://localhost:8080
```

## 项目创建流程

* 创建 package.json；
* 创建 tsconfig.json；
* 创建 webpack.config.js；
* 安装依赖 `npm install` (注意：postinstall 命令会在安装完依赖后继续安装)；
* 全局安装 typings ：`$(npm bin)/typings install --global --save dt~core-js`；
* 创建应用文件 src/
    * 创建首页 src/index.html
    * 创建入口程序 src/main.ts
    * 创建模块 src/app/hello-world.ts
* 编译 `npm run build`
* 启动服务 `npm run serve`

## Angular 2 学习笔记：

* [基于 Webpack 的 Angular 2 入门项目](https://github.com/lijiakof/ng2-webpack-starter)
* [Angular 2 学习笔记](https://github.com/lijiakof/ng-book2)
