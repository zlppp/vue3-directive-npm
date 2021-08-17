const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-typescript',
                {
                  allExtensions: true
                }
              ]
            ]
          }
        }
      }
    ],
  },
  mode: 'development'
}