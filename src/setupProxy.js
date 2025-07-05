const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Sree_Krishna_Agencies',
    createProxyMiddleware({
      target: 'http://localhost:5173',
      changeOrigin: true,
      pathRewrite: {
        '^/Sree_Krishna_Agencies': ''
      }
    })
  );
};