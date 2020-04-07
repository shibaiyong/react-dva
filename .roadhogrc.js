const path = require('path')
const { version } = require('./package.json')



export default {
    entry: 'src/index.js',
    outputPath: './dist',
    publicPath: './',
    theme: {
        'primary-color': '#1db7f0'
    },
    proxy: {
        '/roles': {
            //target: 'http://localhost:8090/'
            //target: 'http://12.3.0.13:8090/'
            //target: 'http://192.168.129.108:8090/'
            target: 'http://10.3.50.103:8095/'
            //target: 'http://10.3.50.103:8099/'
            //target: 'http://10.3.50.113:8099/'
            //target: 'http://10.3.50.133:8099/'
        },
        '/api/': {
            //target: 'http://localhost:8090/',
            //target: 'http://12.3.0.13:8090/',
            //target: 'http://192.168.129.108:8090/'
            target: 'http://10.3.50.103:8095/',
            //target: 'http://10.3.50.103:8099/'
            //target: 'http://10.3.50.113:8099/'
            //target: 'http://10.3.50.133:8099/'
            
            //target: 'http://47.105.119.74:81/',
            //secure: false,
            // changeOrigin: true,
            // cookieDomainRewrite: 'localhost'
        }
    },
    env: {
        development: {
            extraBabelPlugins: [
                "dva-hmr",
                "transform-runtime",
                [
                    "import", {
                        "libraryName": "antd-mobile",
                        "style": true
                    }
                ]
            ]
        },
        production: {
            extraBabelPlugins: [
                "transform-runtime",
                [
                    "import", {
                        "libraryName": "antd-mobile",
                        "style": true
                    }
                ]
            ]
        }
    },
}