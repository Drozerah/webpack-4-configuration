// const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // mode: "development", // Stop minify webpack JS bundle
    mode: "production", // Minify webpack JS bundle
    // devtool: "none", // Simplify outputted bundle code for reader when development
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
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader", // Exports HTML as string
                        options: {
                            minimize: false // Minimize HTML
                        }
                    }
                ] 
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/, 
                use: [
                    {
                        loader: "file-loader", // Emits the file into the output directory
                        options: {
                            outputPath: "img", // output path into the dist directory
                            name: "[name].[hash].[ext]",
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. Inject CSS into the DOM
                    "css-loader", // 2. Turns CSS into CommonJS
                    "sass-loader" // 1. Turns sass into css
                ] 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // Generate a file dist/index.html
            template: "./src/index.html", // Use html source
            filename: "./index.html" // Output html file into ./dist
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}