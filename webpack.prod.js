const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: "production",
    devtool: 'none',
    entry: './src/component/scroll.js',
    output: {
        filename: 'vue-line-scroll.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        vue: 'vue'
    },
    // optimization: {
    //     moduleIds: 'hashed',
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //             },
    //         },
    //     },
    // },
    plugins: [

        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'Output Management',
        //     template: path.join(__dirname, 'index.html'),
        // })
    ],
});