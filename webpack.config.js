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
        main: [path.resolve("test/index.js")],
        // "babel-polyfill":"babel-polyfill",
        // "react":"react"
        // vendor: ["react", "babel-polyfill", "socket.io-client"]
    },
    output: {
        path: path.resolve("build"),
        filename: "[name].js?[hash:8]",
        chunkFilename: "chunk.[name].js?[chunkhash:8]"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: "'" + process.env.NODE_ENV + "'",
                VERSION: "'" + new Date().toLocaleString() + "'" // 加入时间戳作为版本识别
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve("html-template/index.html"),
            minify: {
                collapseWhitespace: false
            },
        }),
        new ExtractTextPlugin('style.css?[contenthash:8]'),
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
            loader: 'file-loader?name=assets/[name].[ext]?[hash:8]'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader!less-loader?strictMath"})
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader"})
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
    }
};
if (process.env.NODE_ENV == "production") {
    // config.plugins.push(
    //     new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"
    // ));
}
module.exports = config;