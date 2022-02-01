// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/main.tsx',
    devtool: 'eval-source-map',
    mode: 'development',
    target: 'web',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    devServer: {
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: path.resolve(__dirname, "node_modules"),
                loader: 'ts-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Some page",
            template: "assets/index.html",
            inject: false
        })
    ]
}
