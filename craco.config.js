const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  /*   plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ], */
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
    /*     configure: (webpackConfig, { env, paths }) => {
      // 修改build的生成文件名称
      paths.appBuild = "build";
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, "build"),
        publicPath: "/my-web-music/build/",
      };
      return webpackConfig;
    }, */
  },
};
