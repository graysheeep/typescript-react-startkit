const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const port = 8090

const config = require('./webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    noInfo: true, hot: true,
    stats: {
      colors: true,
      chunks: false,
      children: false
    }
}))
app.use(webpackHotMiddleware(compiler))

app.listen(port, '0.0.0.0', (err)=> {
    err ? console.error('error is ', err) : console.log(`Server run on http://localhost:${port}`)
})
