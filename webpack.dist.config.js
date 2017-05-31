var webpack = require("webpack");
var HTMLWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");
var autoprefixer = require('autoprefixer');

// args
// var program = require('commander');
// program
//     .version('0.0.1')
//     .allowUnknownOption()
//     .option('-o, --os [value]', '平台', "default")
//     .parse(process.argv);
if (process.env.NODE_ENV == undefined)
    process.env.NODE_ENV = 'production';

console.log("NODE_ENV:%s", process.env.NODE_ENV);

var config = {
    entry: {
        main: path.resolve("src/index.js"),
        // "babel-polyfill":"babel-polyfill",
        // "react":"react"
        // vendor: ["react", "babel-polyfill", "socket.io-client"]
    },

    externals:["react", "react-dom", "react-redux", "redux", "redux-thunk",
        "react-addons-update", "react-addons-css-transition-group",
        "classnames", "object-assign"],
    output: {
        libraryTarget:"umd",
        path: path.resolve("dist"),
        filename: "reactlayer.js",
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: "'" + process.env.NODE_ENV + "'",
        //         VERSION: "'" + new Date().toLocaleString() + "'" // 加入时间戳作为版本识别
        //     }
        // }),
        // new HTMLWebpackPlugin({
        //     template: path.resolve("index.html"),
        //     minify: {
        //         collapseWhitespace: false
        //     },
        // }),
        new ExtractTextPlugin('style.css'),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(png|jpeg|jpg|gif)$/,
            loader: 'file?name=assets/[name].[ext]?[hash:8]'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("css-loader?modules!postcss-loader!less-loader?strictMath")
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract("css-loader!postcss-loader")
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=assets/[name].[ext]?[hash:8]'
        }, {
            test: /\.(json|xml)/,
            loader: 'file-loader?name=assets/[name].[ext]?[hash:8]'
        },{
            test: /\.(svg)$/,
            loader: 'file-loader?name=assets/[name].[ext]?[hash:8]'
        }]
    },
    // postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
if (process.env.NODE_ENV == "production") {
    // config.plugins.push(
    //     new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"
    // ));
}
module.exports = config;