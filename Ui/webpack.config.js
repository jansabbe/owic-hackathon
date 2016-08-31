const HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    path = require('path');

const rootFolder = path.join(__dirname, '..'),
    outputFolder = path.join(rootFolder, 'wwwroot');

module.exports = {
     entry: './src/app.ts',
     output: {
         path: outputFolder,
         filename: '[name].[hash].js'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
       extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin([outputFolder], {root: rootFolder}),
        new HtmlWebpackPlugin({
            title: 'PetCupid',
            template: 'index.ejs'
        })
    ]
 };
