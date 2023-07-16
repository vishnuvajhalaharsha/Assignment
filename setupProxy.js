

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/app-data/study-abroad/courses.json', 
    createProxyMiddleware({
      target: 'https://www.liverpool.ac.uk', 
      changeOrigin: true,
    })
  );
};
