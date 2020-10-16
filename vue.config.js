const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    configureWebpack: {
        entry: {
            app: './src/main.js'
        },
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('src', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('static', resolve('static'))
            .set('data', resolve('src/data'))
            .set('images', resolve('src/assets/images'))
            .set('router', resolve('src/router'))
            .set('views', resolve('src/views'))
            .set('plugin', resolve('src/plugin'))
    }
}
