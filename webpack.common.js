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
        // filename: '[name].[contenthash].js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },


    plugins: [
        // new FaviconsWebpackPlugin({
        //     logo: './src/assets/favicon/fav.png',
        //     prefix: 'assets/favicons/'
        // }),

        new CleanWebpackPlugin(['dist']),

        new MiniCssExtractPlugin({
            // filename: "[name][contenthash].css"
            filename: "[name].css"
        }),


        ///////////first page loaded SABRO POLLO index
        new HtmlWebpackPlugin({
            filename: 'pollo/index.html',
            hash: false,
            template: './src/views/sabropollo/index.pug',
            chunks: ['sabro']
        }),

        new HtmlWebpackPlugin({
            filename: 'pollo/productos.html',
            hash: false,
            template: './src/views/sabropollo/productos.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'pollo/recetas.html',
            hash: false,
            template: './src/views/sabropollo/recetas.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'pollo/recetas-categoria.html',
            hash: false,
            template: './src/views/sabropollo/recetas-categoria.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'pollo/recetas-single.html',
            hash: false,
            template: './src/views/sabropollo/recetas-single.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'pollo/sabrotips.html',
            hash: false,
            template: './src/views/sabropollo/sabrotips.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'pollo/calidad.html',
            hash: false,
            template: './src/views/sabropollo/calidad.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'pollo/expendios.html',
            hash: false,
            template: './src/views/sabropollo/expendios.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'pollo/ventas.html',
            hash: false,
            template: './src/views/sabropollo/ventas.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'pollo/privacidad.html',
            hash: false,
            template: './src/views/sabropollo/privacidad.pug',
            chunks: ['sabro']
        }),


        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
        ///////////first page loaded SABRO HUEVO index
        new HtmlWebpackPlugin({
            filename: 'huevo/index.html',
            hash: false,
            template: './src/views/sabrohuevo/index.pug',
            chunks: ['sabro']
        }),

        new HtmlWebpackPlugin({
            filename: 'huevo/productos.html',
            hash: false,
            template: './src/views/sabrohuevo/productos.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'huevo/recetas.html',
            hash: false,
            template: './src/views/sabrohuevo/recetas.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'huevo/recetas-categoria.html',
            hash: false,
            template: './src/views/sabrohuevo/recetas-categoria.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'huevo/recetas-single.html',
            hash: false,
            template: './src/views/sabrohuevo/recetas-single.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'huevo/sabrotips.html',
            hash: false,
            template: './src/views/sabrohuevo/sabrotips.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'huevo/calidad.html',
            hash: false,
            template: './src/views/sabrohuevo/calidad.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'huevo/expendios.html',
            hash: false,
            template: './src/views/sabrohuevo/expendios.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'huevo/ventas.html',
            hash: false,
            template: './src/views/sabrohuevo/ventas.pug',
            chunks: ['sabro']
        }),





        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
        ///////////first page loaded ALIAMSA index
        new HtmlWebpackPlugin({
            filename: 'aliamsa/index.html',
            hash: false,
            template: './src/views/aliamsa/index.pug',
            chunks: ['sabro']
        }),

        new HtmlWebpackPlugin({
            filename: 'aliamsa/alimento-cerdos.html',
            hash: false,
            template: './src/views/aliamsa/productos-cerdos.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'aliamsa/alimento-ganado.html',
            hash: false,
            template: './src/views/aliamsa/productos-ganado.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'aliamsa/alimento-aves.html',
            hash: false,
            template: './src/views/aliamsa/productos-aves.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'aliamsa/calidad.html',
            hash: false,
            template: './src/views/aliamsa/calidad.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'aliamsa/expendios.html',
            hash: false,
            template: './src/views/aliamsa/expendios.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'aliamsa/ventas.html',
            hash: false,
            template: './src/views/aliamsa/ventas.pug',
            chunks: ['sabro']
        }),
        
        
        
        
        
        
        
        
        
        
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
        ///////////first page loaded INTERPEC index
        new HtmlWebpackPlugin({
            filename: 'interpec/index.html',
            hash: false,
            template: './src/views/interpec/index.pug',
            chunks: ['sabro']
        }),

        new HtmlWebpackPlugin({
            filename: 'interpec/expendios.html',
            hash: false,
            template: './src/views/interpec/expendios.pug',
            chunks: ['sabro']
        }),
        new HtmlWebpackPlugin({
            filename: 'interpec/ventas.html',
            hash: false,
            template: './src/views/interpec/ventas.pug',
            chunks: ['sabro']
        }),









        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/img/'),
            to: path.resolve(__dirname, 'dist/assets/img/')
        }], { debug: 'info' }),

        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/fonts/'),
            to: path.resolve(__dirname, 'dist/assets/fonts/')
        }], { debug: 'info' }),
        
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/js/external/'),
            to: path.resolve(__dirname, 'dist/assets/js/external/')
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