const common = require("./webpack.common.js")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const autoprefixer = require('autoprefixer')

module.exports = merge(common, {
    mode: "production", // Minify webpack JS bundle
    optimization: {
        minimizer: [
            new TerserJSPlugin({}), // Minimize JS
            new OptimizeCSSAssetsPlugin({}) // Minimize CSS
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // Generate a file dist/index.html
            template: "./src/index.html", // HTML source
            filename: "./index.html", // Output html file into ./dist
            minify: { // Minimize HTML
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
                // removeRedundantAttributes: true,
                // removeScriptTypeAttributes: true,
                // removeStyleLinkTypeAttributes: true,
                // useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({ // Extract CSS into separate files
            filename: "[name].[contenthash:8].css",
        }),
        new CleanWebpackPlugin() // Cleaning up the ./dist folder
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }

            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // 4. Extract CSS into separate files
                    },
                    {
                        loader: "css-loader", // 3. Turns CSS into CommonJS
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
                    }  
                ] 
            }
        ]
    }
})