var path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  css: {
    loaderOptions: {
      stylus: {
        import: [path.resolve(__dirname, "src/assets/styles/common.styl")]
      }
    }
  }
};