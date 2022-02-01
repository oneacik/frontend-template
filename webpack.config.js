// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/main.tsx',
  devtool: 'eval-source-map',
  mode: 'development',
  target: 'web',
  output: {
    path: path.join(__dirname, '/public/script'),
    filename: 'bundle.js',
    publicPath: '/script/'
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
        test: /\.[tj]sx?$/,
        exclude:path.resolve(__dirname, "node_modules"),
        loader: 'babel-loader'
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
  plugins: [new HtmlWebpackPlugin()]
}
