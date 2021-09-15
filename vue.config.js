// 引入path
let path = require('path');
// 判断环境
console.log(1, process.env.NODE_ENV);
console.log(2, process.cwd());
console.log(3, process.env.BASE_API);
console.log(3, process.env.DDS);
if (process.env.NODE_ENV === 'production') {
  // // 发布的环境
  // module.exports = {
  // 	// 静态资源
  // 	outputDir: path.join(process.cwd(), '../server/static/home'),
  // 	// 模板
  // 	indexPath: path.join(process.cwd(), '../server/views/home.html'),
  // 	// 模板文件引入静态资源相对位置。
  // 	publicPath: '/static/home'
  // }
} else {
  // 请求代理对象
  // let proxyObject = {
  // 	target: 'http://localhost:8685'
  // }
  // // 开发环境
  // module.exports = {
  // 	// 服务器配置
  // 	devServer: {
  // 		// 代理
  // 		proxy: {
  // 			// '/v1/order/findHomeNum/2': {
  // 			// 	// http://localhost:3000/v1/order
  // 			// 	target: 'http://localhost:8685'
  // 			// },
  // 			// '/v1/user/login': {
  // 			// 	// http://localhost:3000/data/home
  // 			// 	target: 'http://localhost:8685'
  // 			// },
  // 			// // list请求
  // 			// '/data/list': {
  // 			// 	target: 'http://localhost:3000'
  // 			// },
  // 			// '/data/home': proxyObject,
  // 			// '/data/list': proxyObject,
  // 			// // 排序
  // 			// '/data/order': proxyObject,
  // 			// // 搜索
  // 			// '/data/search': proxyObject,
  // 			// // 详情数据
  // 			// '/data/detail': proxyObject
  // 		}
  // 	}
  // }
}
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false, // 关闭语法校验
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://39.108.91.47:8010/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ]);

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch');

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end();
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk('single');
    });
  }
};
