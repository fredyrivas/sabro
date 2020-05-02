const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//const webpack = require('webpack');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        //contentBase: './dist'
        contentBase: path.join(__dirname, 'dist'),
        //host: '192.168.1.66',
        port: 8000,
        https: false
    }

    // plugins:[
    //     new webpack.HotModuleReplacementPlugin()
    // ]
})
