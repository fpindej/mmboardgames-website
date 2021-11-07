const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({ /* additional options here */ }),
        ],
        minimize: true,
    },
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.?(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx'],
                },
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|ico)$/,
                use: ['file-loader?name=[name].[ext]'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new Dotenv(),
        new ImageMinimizerPlugin({
            minimizerOptions: {
              // Lossless optimization with custom option
              // Feel free to experiment with options for better result for you
              plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
                // Svgo configuration here https://github.com/svg/svgo#configuration
                [
                  "svgo",
                  {
                    // plugins: extendDefaultPlugins([
                    //   {
                    //     name: "removeViewBox",
                    //     active: false,
                    //   },
                    //   {
                    //     name: "addAttributesToSVGElement",
                    //     params: {
                    //       attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                    //     },
                    //   },
                    // ]),
                  },
                ],
              ],
            },
          }),
    ],
}