// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    entry: './app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'survey.js'
    },
    devServer: {
        open: true,
        host: 'localhost',
        historyApiFallback: {
            rewrites: [
                { from: '/', to: '/survey.html' },
            ]
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'survey.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'survey.css'
        }),

        new TerserWebpackPlugin({
            terserOptions: {
                keep_classnames: true,
                keep_fnames: true
            }
        })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-modules-typescript-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.css', '...'],
        alias: {
            "Domain": path.resolve(__dirname, "./Domain"),
            "Applications": path.resolve(__dirname, "./Applications"),
            "Repositories": path.resolve(__dirname, "./Repositories"),
            "Frameworks": path.resolve(__dirname, "./Frameworks"),
        }
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
