const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  mode: 'development'
}