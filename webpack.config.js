
const { resolve } = require('path')
const webpack =  require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const rootPath = resolve('./src')
const isDev = process.env.NODE_ENV === 'development'

const common = [
  'core-js',
  ...(isDev ? [
    'webpack-hot-middleware/client?path=http://127.0.0.1:8090/__webpack_hmr&noInfo=true&reload=true',
    'webpack/hot/only-dev-server'
  ] : [])
]
module.exports = {

  entry: {
    main: [
      ...common,
      './src/view/app.tsx'
    ]
  },

  devtool: isDev ? 'inline-source-map' : undefined,

  resolve: {
    extensions: ['', '.webpack.js', '.js', '.jsx', '.tsx', '.ts'],
    root: rootPath,
    modulesDirectories: ['node_modules']
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: `js/[name].${isDev ? '' : '[chunkhash].'}js`,
    chunkFilename: "js/[name].[chunkhash].chunk.bundle.js",
    publicPath: "/"
  },

  module: {
    loaders: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts'
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url?limit=102400&name=assets/images/[name]_[hash:base64:5].[ext]']
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=4096&name=assets/fonts/[name]_[hash:base64:5].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main']
    }),
    new ExtractTextPlugin('styles/[name].[hash].css')
  ].concat(isDev ? [
    new webpack.HotModuleReplacementPlugin()
  ] : [
    new webpack.optimize.UglifyJsPlugin({compress: {
      warnings: false
    }})
  ])
}
