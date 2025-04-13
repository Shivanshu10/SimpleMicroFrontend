module.exports = {
    module : {
        rules: [
            {
                // tell babel to process all file that have mjs or js extension
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            // process jsx in babel
                            "@babel/preset-react",
                            // process js in babel
                            "@babel/preset-env",
                        ],
                        plugins: [
                            // add support for async/await
                            "@babel/plugin-transform-runtime",
                        ]
                    }
                }
            }
        ]
    }
}