const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'), // Give the Webpack outputted JS bundle files names dynamically *
    filename: '[name].[contentHash].js' // Set the output path/location directory name for the bundle
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader', // Exports HTML as string
            options: {
              minimize: false // Minimize HTML
            }
          }
        ]
      },
      {
        test: /favicon\.png$/, // Extract './favicon.png'
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '' // Output path into the ./dist root directory
            }
          }
        ]
      },
      {
        test: /(robots|humans)\.txt$/, // Extract './robots.txt' or './humans.txt'
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '' // Output path into the ./dist root directory
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        exclude: /favicon\.png$/, // Exclude this file
        use: [
          {
            loader: 'file-loader', // Emits the file into the output directory
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'img' // output path into the dist directory
            }
          }
        ]
      }
    ]
  }
}

// * [name] are dynamically generated from the properties declared as entry points in webpack.common.js
