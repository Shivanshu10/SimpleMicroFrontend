const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin

module.exports = {
    mode: "development",
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ]
}