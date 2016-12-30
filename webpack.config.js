var webpack = require("webpack");
// let path = require('path');
// let envFile = require('node-env-file');
//
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//
// try {
//     envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
// } catch (e) {
//
// }

module.exports = {
    entry: [
        './src/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            React: 'react'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './static/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './src/components',
            './src/api',
            './src/utils'
        ],
        alias: {
            app: 'src',
            applicationStyles: 'src/styles/app.scss',
            actions: 'src/actions/actions.jsx',
            reducers: 'src/reducers/reducers.jsx',
            configureStore: 'src/store/configureStore.jsx',
            resources: "src/styles/resources"
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            { test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192' }
        ]
    },
    sassLoader: {
        includePaths: [
            // path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
