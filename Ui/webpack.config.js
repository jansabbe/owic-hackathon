const HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    webpack = require('webpack'),
    path = require('path');

const rootFolder = path.join(__dirname, '..'),
    outputFolder = path.join(rootFolder, 'wwwroot');

module.exports = {
     entry: {
         'vendor': './src/vendor.ts',
         'main': './src/bootstrap.ts'
     },
     output: {
         path: outputFolder,
         filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'raw-loader'}
        ]
    },
    resolve: {
       extensions: ['', '.js', '.ts'],
       modulesDirectories: ['node_modules'],
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin([outputFolder], {root: rootFolder}),
        new CopyWebpackPlugin([{from:'./assets', to: path.join(outputFolder, 'assets')}]),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new HtmlWebpackPlugin({
            title: 'PetCupid',
            template: 'index.ejs'
        })
    ]
 };
