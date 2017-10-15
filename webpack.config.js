const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const nodeExternals = require('webpack-node-externals');
module.exports = {
    context: path.join(__dirname, 'src', 'app'),
    entry: {
        bundle: "./browser"
    },
    output: {
        path: path.join(__dirname, "mock-server", "assets"),
        publicPath: '/',
        filename: "[name].js"
    },
    devtool: 'cheap-inline-module-source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg|json)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                    //publicPath: 'assets/'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true
    }
};
