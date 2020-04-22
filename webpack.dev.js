const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path')
const common = require('./webpack.common.js');
module.exports = merge(common, {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },

    plugins: [

        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.join(__dirname, 'index.html'),
        }),

    ],
});