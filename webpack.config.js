var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
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
            './src/api'
        ],
        alias: {
            app: 'src',
            applicationStyles: 'src/styles/app.scss',
            actions: 'src/actions/actions.jsx',
            actionTypes: 'src/actions/actionTypes.js',
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
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
