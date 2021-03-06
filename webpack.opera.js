const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {

    output: {
        path: path.join(__dirname, 'dist-opera'),
    },
    plugins: [  
        new webpack.DefinePlugin({
            BUILD_PLATFORM: 'opera'
        })
    ]
})