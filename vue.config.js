'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Element Admin' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  /**
   * publicPath
   * Type: string
   * Default: '/'
   * publicPath:部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致
   * 但是 Vue CLI 在一些其他地方也需要用到这个值，
   * 所以请始终使用 publicPath 而不要直接修改 webpack 的 output.publicPath。
   * 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
   * 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
   * 例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
   * 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，
   * 这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
   * 相对 publicPath 的限制
   * 相对路径的 publicPath 有一些使用上的限制。在以下情况下，应当避免使用相对 publicPath:
   * 当使用基于 HTML5 history.pushState 的路由时；
   * 当使用 pages 选项构建多页面应用时。
   * 这个值在开发环境下同样生效。如果你想把开发服务器架设在根路径，你可以使用一个条件式的值：
   * module.exports = {
   * publicPath: process.env.NODE_ENV === 'production'
   * ? '/production-sub-path/'
   * : '/'
   * }
   */
  publicPath: '/',
  /**
   * outputDir
   * Type: string
   * Default: 'dist'
   * @desc 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
   * 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
   * 提示: 请始终使用 outputDir 而不要修改 webpack 的 output.path。
   * */
  outputDir: 'dist',
  /**
   * assetsDir
   * Type: string
   * Default: ''
   * 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
   * 提示: 从生成的资源覆写 filename 或 chunkFilename 时，assetsDir 会被忽略。
   * */
  assetsDir: 'static',
  /**
   * indexPath
   * Type: string
   * Default: 'index.html'
   * 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
   */
  indexPath: 'index.html',
  /**
   * filenameHashing
   * Type: boolean
   * Default: true
   * 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
   * 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
   * 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
   * */
  filenameHashing: true,
  /**
   * pages
   * Type: Object
   * Default: undefined
   * 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。
   * 其值应该是一个对象，对象的 key 是入口的名字，value 是：
   * 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
   * 或一个指定其 entry 的字符串。
   * */
  /*
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
  */
  /**
   * lintOnSave
   * Type: boolean | 'warning' | 'default' | 'error'
   * Default: 'default'
   * 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
   * 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
   * 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'default'。
   * 这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
   * 设置为 error 将会使得 eslint-loader 把 lint 警告也输出为编译错误，这意味着 lint 警告将会导致编译失败。
   * 或者，你也可以通过设置让浏览器 overlay 同时显示警告和错误：
   * devServer: {
   * overlay: {
   *   warnings: true,
   *   errors: true
   *   }
   * }
   * */
  /**
   * 当 lintOnSave 是一个 truthy 的值时，eslint-loader 在开发和生产构建下都会被启用。
   * 如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置：
   * lintOnSave: process.env.NODE_ENV !== 'production'
   * */
  lintOnSave: process.env.NODE_ENV === 'development',
  /**
   * runtimeCompiler
   * Type: boolean
   * Default: false
   * 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
   */
  runtimeCompiler: false,
  /**
   * transpileDependencies
   * Type: Array<string | RegExp>
   * Default: []
   * 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
   * */
  transpileDependencies: [],
  /**
   * productionSourceMap
   * Type: boolean
   * Default: true
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   * */
  productionSourceMap: false,
  /**
   * crossorigin
   * Type: string
   * Default: undefined
   * 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
   * 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
   * 详细参考： https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes
   */
  /**
   * integrity
   * Type: boolean
   * Default: false
   * 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
   * 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
   * 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
   * 另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
   */
  devServer: {
    port: port,
    open: true,
    // 你也可以通过设置让浏览器 overlay 同时显示警告和错误：
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
  /**
   * configureWebpack
   * Type: Object | Function
   * 如果这个值是一个对象，则会通过 webpack-merge https://github.com/survivejs/webpack-merge 合并到最终的配置中。
   * 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
   * 更多细节可查阅：配合 webpack > 简单的配置方式
   */
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    /*
    * 调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象：
    * 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。
    * 该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象：
    configureWebpack: config => {
     if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      } else {
      // 为开发环境修改配置...
      }
    }
    * */
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  /**
   * chainWebpack
   * Type: Function
   * 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
   * 更多细节可查阅：配合 https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7 链式操作
   * */
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // config.plugins.delete('preload')

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
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
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
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
          })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
