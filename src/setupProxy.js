const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://keyajob-v2.herokuapp.com",
      changeOrigin: true,
    })
  );
};
