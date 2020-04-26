const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
    entry: {
        sabro: './src/sabro.js'
    },
    

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },


    plugins: [
        // new FaviconsWebpackPlugin({
        //     logo: './src/assets/favicon/fav.png',
        //     prefix: 'assets/favicons/'
        // }),

        new CleanWebpackPlugin(['dist']),

        new MiniCssExtractPlugin({
            filename: "[name][contenthash].css"
        }),


        ///////////first page loaded SABRO POLLO index
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            template: './src/views/sabropollo/index.pug',
            chunks: ['sabro']
        }),

        new HtmlWebpackPlugin({
            filename: 'productos.html',
            hash: true,
            template: './src/views/sabropollo/productos.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'recetas.html',
            hash: true,
            template: './src/views/sabropollo/recetas.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'recetas-categoria.html',
            hash: true,
            template: './src/views/sabropollo/recetas-categoria.pug',
            chunks: ['sabro']
        }),






        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/img/'),
            to: path.resolve(__dirname, 'dist/assets/img/')
        }], { debug: 'info' }),

        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/fonts/'),
            to: path.resolve(__dirname, 'dist/assets/fonts/')
        }], { debug: 'info' })

    ],


    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader?url=false',
                'sass-loader?url=false'
            ]
        },
        {
            test: /\.pug$/,
            use: {
                loader: 'pug-loader',
                query: {
                    pretty: true
                }
            }
        }
        ]
    },


    resolve: {
        alias: {
            "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
            "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
            "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')
        },
    }
}