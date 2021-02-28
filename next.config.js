module.exports = {
    env: {
        DEV_HOSTNAME: 'localhost',
        DEV_PORT: '3000',
        DEV_HOST: 'http://$DEV_HOSTNAME:$DEV_PORT',
        PROD_HOSTNAME: 'thamelmart.com',
        PROD_HOST: 'http://$PROD_HOSTNAME',
        API_URL: 'http://127.0.0.1:8000/api',
        // NODE_ENV: 'devlopment'
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
            config.plugins.push(new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
        
                 
            }),)
        // Important: return the modified config
        return config
      },
}