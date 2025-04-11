// use to merge the common config with the dev config
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// include common config
const commonConfig = require('./webpack.common');
// include module federation
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// require package.json, to not add shared modules manually
const packageJson = require('../package.json');

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js"
            },
            // shared: ["react", "react-dom"]
            shared: packageJson.dependencies, // automatically handle deps
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ]
}

module.exports = merge(commonConfig, devConfig);