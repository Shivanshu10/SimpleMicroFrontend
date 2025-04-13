// use to merge the common config with the dev config
const { merge } = require('webpack-merge');
// include common config
const commonConfig = require('./webpack.common');
// include module federation
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// require package.json, to not add shared modules manually
const packageJson = require('../package.json');

const devConfig = {
    mode: "development",
    output: {
        publicPath: "http://localhost:8080/",
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "/index.html"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js",
                auth: "auth@http://localhost:8082/remoteEntry.js",
                dashboard: "dashboard@http://localhost:8083/remoteEntry.js"
            },
            // shared: ["react", "react-dom"]
            shared: packageJson.dependencies, // automatically handle deps
        })
    ]
}

module.exports = merge(commonConfig, devConfig);