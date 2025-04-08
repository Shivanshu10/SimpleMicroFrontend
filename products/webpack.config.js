const HtmlWebpackPlugin = require("html-webpack-plugin");
// import module federation plugin
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8081
    },
    plugins: [
        // expose file
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntry.js",
            exposes: {
                "./ProductsIndex": "./src/bootstrap",
            },
            shared: ["faker"],
            // shared: {
            //     faker: {
            //         singleton: true,
            //     }
            // }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ]
}