module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
  }
};