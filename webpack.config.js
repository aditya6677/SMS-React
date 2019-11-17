const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { join, resolve } = require('path');

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(png|svg|jpg|ico|jpeg|gif)$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: resolve(__dirname, 'public')
    },
    stats: {
        children: false
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebPackPlugin({
            template: resolve(__dirname, 'public', 'index.html')
        }),
    ]
};