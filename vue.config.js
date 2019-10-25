module.exports={
    devServer: { 
        proxy: {
            '/v2': {
                //target: 'https://api.douban.com',
                target:'https://douban.uieee.com',
                changeOrigin: true
            }
        }
    }
}