const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = (webpackConfig, env) => {
    const production = env === 'production'
    webpackConfig.output.chunkFilename = '[name].[chunkhash].js'
    webpackConfig.plugins = webpackConfig.plugins.concat([
        new CopyWebpackPlugin([
            {
                from: 'src/public',
                to: './'
            }
        ]),
        new HtmlWebpackPlugin()
    ])

    webpackConfig.resolve.alias = {
        themes: `${__dirname}/src/themes`,
    }

    return webpackConfig
}