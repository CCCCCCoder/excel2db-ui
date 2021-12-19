'use strict'

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        ws: true,
        target: 'http://localhost:8999',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
}
