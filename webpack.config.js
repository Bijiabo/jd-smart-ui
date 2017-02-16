/**
 * Created by huchunbo on 2017/2/10.
 */
var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    externals: {
        jquery: 'window.$'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{inline:true},
    module: {
        loaders: [
            {test: /\.js$/, loaders: [ "babel-loader", "eslint-loader" ], exclude: /node_modules/},
        ],
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true,
                    includePaths: ["node_modules"]
                }
            }]
        }]
    },
    // eslint: {
    //     failOnWarning: false,
    //     failOnError: true
    // },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            options: {
                eslint: {
                    /* your eslint loader config */
                    configFile: './.eslintrc'
                }
            }
        })
    ]
    // eslint: {
    //     formatter: require('eslint-friendly-formatter'),
    //     failOnWarning: false,
    //     failOnError: true
    // },
};