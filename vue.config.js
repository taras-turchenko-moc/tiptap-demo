const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  publicPath: '/tiptap-demo/',
  outputDir: path.resolve(__dirname, './docs'),
  productionSourceMap: false
})
