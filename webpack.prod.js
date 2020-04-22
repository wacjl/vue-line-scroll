const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const PreloadPlugin = require('preload-webpack-plugin')
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = merge(common, {
    mode: "production",
    devtool: 'none',
    entry: './src/index.js',
    // output: {
    //     filename: 'vue-line-scroll.js',
    //     path: path.resolve(__dirname, 'dist'),
    //     library: 'vue-line-scroll', // 指定的就是你使用require时的模块名
    //     libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    //     umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    // },
    resolve: {

        extensions: ['*', '.js', '.vue']
    },
    optimization: {
        moduleIds: 'hashed',// 与
        runtimeChunk: 'single',//分离webpack运行文件
        minimizer: [
            new TerserPlugin({
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),//压缩js
            new OptimizeCSSAssetsPlugin({})//压缩css
        ],

        splitChunks: {
            minSize: 30000,
            maxSize: 500000,
            minChunks: 1,
            name: true,
            cacheGroups: {

                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -10,
                },
                // 其他chunk文件优化
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },

            },
        },
    },
    plugins: [

        new CleanWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 30000// Minimum number of characters
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.join(__dirname, 'index.html'),
        }),
        // 开启gzip
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new PreloadPlugin(
            {
                rel: 'preload',
                include: 'initial'
            }
        ),
        /* config.plugin('prefetch') */
        new PreloadPlugin(
            {
                rel: 'prefetch',
                include: 'asyncChunks'
            }
        ),
        //打包分析
        //new BundleAnalyzerPlugin()

    ],
});