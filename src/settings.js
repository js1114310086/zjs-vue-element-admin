// setting.js 配置文件
module.exports = {
  // 详细请参考网址 https://www.jianshu.com/p/8664cd784931
  /**
   * @type {string} '项目标题'
   * @description 项目标题,在src/settings.js 配置项目标题
   * 提示: 标题旁边的图标在public里面修改
   * */
  title: '网址上面的标题',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel，
   * showSettings用来设置是否显示控制面板，设置为false则不显示，就是可以设置这几项的按钮
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   * tagsView是我们打开某个页面是否有页面标签
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   * fixedHeader是内容页面向下滑动时头部是否固定，false是不固定， true是固定
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   * sidebarLogo控制菜单栏上方是否显示图标
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   * 打开vue.config.js文件，找到如下位置
   * config
   *  .when(process.env.NODE_env === 'developement',
   *    config => config.devtool('cheap-source-map')
   *  )
   *  heap-source-map调试模式没有完全编译展示我们的源代码
   * 我们改成source-map调试模式，这时候再来看Sources的App.vue文件，已经和源代码显示的一样，在这样的环境下调试我们会更加方便
   * 但是source-map有一个缺点，每当我们程序有改动时，也需要同步生成source-map文件，这样会使我们构建变慢，在实际开发过程中推荐使用eval,以增加构建速度 在需要调试的时候使用source-map
   */
  errorLog: 'production'
}
