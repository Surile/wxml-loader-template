# wxml-loader-template

# 安装

```javascript
yarn add -D wxml-loader-template || npm i wxml-lodaer-template -d
```

# webpack.config

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.wxml$/,
        loader: 'wxml-loader-template'
      }
    ]
  }
}
```

### 关于语法

由于使用的是 vue-template-compiler 进行解析，所以语法基本与 vue-loader 相同

唯一区别就是我们需要加**template**中加入**lang="wxml"**

### 实例用法
