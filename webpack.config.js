import path from 'path';
import { fileURLToPath } from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const path = require('path');

/*
module.exports = {
// module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}
*/

const config = {
// module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    output: {
//      path: path.resolve(__dirname, 'dist'),
        path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist'),
        filename: 'assets/bundle.js',
    },
/*    
//    module: {
    rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
//    }
*/
}

export default config;