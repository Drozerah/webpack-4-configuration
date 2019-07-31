const common = require("./webpack.common.js")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const autoprefixer = require('autoprefixer')

module.exports = merge(common, {

    mode: "development", // Stop minify webpack JS bundle
    devtool: "none", // Simplify outputted bundle code for reader when development
    plugins: [
        new HtmlWebpackPlugin({ // Generate a file dist/index.html
            template: "./src/index.html", // Use html source
            filename: "./index.html" // Output html file into ./dist
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader", // 4. Inject CSS into the DOM
                        options: {
                            sourceMap: true 
                        }
                    },
                    {
                        loader: "css-loader", // 3. Turns CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader", // 2. Process CSS with PostCSS
                            options: {
                                ident: 'postcss', // Parse CSS and add vendor prefixes
                                plugins: [
                                    new autoprefixer({
                                        'grid': true, // Activate CSS Grid polyfill (IE 10-11)
                                        'overrideBrowserslist': ['> 1%', 'last 2 versions']
                                    })
                                ]
                            }
                    },
                    {
                        loader: "sass-loader", // 1. Turns sass into css
                        options: {
                            sourceMap: true
                        }
                    }  
                ] 
            }
        ]
    }
})