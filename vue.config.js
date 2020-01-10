const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  chainWebpack: config => {
    config.resolve.alias
    // 配置快捷路径，styles为路径名字，resolve是原路径地址
      .set('@styles', resolve('src/assets/styles'))
    // 组件调用快捷路径
      .set('@common', resolve('src/components/common'))
    config.devServer
      // ... your configs
      .set('disableHostCheck', true) // 加上这段
  }
}
