/*
 * @LastEditors: Sinosaurus
 */
const { mode } = require('minimist')(process.argv.slice(2))
// import.meta.env
module.exports = {
  lang: 'zh-CN',
  base: mode === 'development' ? '/' : '/vitepress-test/dist/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    
  }
}