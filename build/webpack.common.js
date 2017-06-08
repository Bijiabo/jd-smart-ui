var path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './app/main.js',
    externals: {
        jquery: 'window.$'
    },
    output: {
        filename: 'sdk.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    devServer: { inline: true },
    module: {
        rules: [{
                test: /\.js$/,
                loaders: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'eslint-loader',
                    query: {
                        configFile: './.eslintrc'
                    },
                }],
            },
        ]
    }
};