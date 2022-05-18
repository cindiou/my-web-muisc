const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      assets: resolve("src/assets"),
      pages: resolve("src/pages"),
      store: resolve("src/store"),
      router: resolve("src/router"),
      common: resolve("src/common"),
      utils: resolve("src/utils"),
      services: resolve("src/services"),
    },
  },
};
