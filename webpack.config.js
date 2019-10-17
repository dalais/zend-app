const webpack = require('webpack');
const path = require('path');
const ENVIRONMENT = process.env.NODE_ENV || 'development';

let config = {
    context: path.resolve(__dirname, "resources/src"),
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "public/js")
    },
    resolve: {
        extensions: [ ".js", ".jsx", '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                include: path.resolve(__dirname, 'resources/src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                }, {
                    loader: 'ts-loader'
                }]
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT)
        })
    ],
    node: {
        process: false
    }
};

if (ENVIRONMENT == 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: false,
                warnings: false
            }
        })
    );
}

module.exports = config;