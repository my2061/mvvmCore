const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    }
}