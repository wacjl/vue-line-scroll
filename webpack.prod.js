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
        path: path.resolve(__dirname, 'dist'),
        library: 'vue-line-scroll', // 指定的就是你使用require时的模块名
        libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    },
    resolve: {

        extensions: ['*', '.js', '.vue']
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
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
        // new HtmlWebpackPlugin({
        //     title: 'Output Management',
        //     template: path.join(__dirname, 'index.html'),
        // })
    ],
});