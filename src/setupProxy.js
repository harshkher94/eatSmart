const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.clarifai.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v2'
      },
    })
  );
};
