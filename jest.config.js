// 这是当前版本的vue-cli生成的jest.conf.js的配置文件，
// 我们可以在package.json中的配置项里看到，
// 我们在npm run unit 的时候，真正运行的就是这个文件的配置。
module.exports = {
  // moduleFileExtensions：这个文档解释的是“模块使用的文件扩展名数组，
  // 从左往右查找这些文件”。实际上我的理解，这个参数的意义就是让jest知道你需要测试覆盖的文件的扩展名都是什么。
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  // transform：简单来说就是转换器，正则匹配到的文件可以通过对应模块的转换器来解决一些未来版本语法时可以使用它。
  // 通过正则来匹配文件，为匹配到的文件使用对应的模块。
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // moduleNameMapper：一种正则表达式到模块名的映射，匹配到的文件的内容可以是空的。
  // 我理解的是，可以通过该参数，来mock一些图片，css等静态资源文件，
  // 因为我们在测试的时候实际上是不太需要这些文件的，但是有需要引入它作为环境上的依赖。
  moduleNameMapper: {
    // rootDir：其实就是指整个项目的根目录，也就是最外层的目录。
    // 再解释下path.resolve(__dirname,"../../")的意义，他最终返回的结果是该文件所在的根目录，
    // 简单来说__dirname返回的是当前目录，再向上两层，就是整个项目的根目录了。
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // snapshotSerializers：快照测试的插件，会生成测试文件的一个快照版本，可以再package.json中查看安装的快照插件。
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  // collectCoverageFrom：为数组中匹配的文件收集覆盖率信息，即使并没有为该文件写相关的测试代码，
  // 需要将collectCoverage设置为true，或者通过--corverage参数来调用jest。
  collectCoverageFrom: ['src/utils/**/*.{js,vue}', '!src/utils/auth.js', '!src/utils/request.js', 'src/components/**/*.{js,vue}'],
  // coverageDirectory：jest输出覆盖率信息文件的目录。
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  // collectCoverage：是否收集测试时的覆盖率信息。
  // 'collectCoverage': true,
  'coverageReporters': [
    'lcov',
    'text-summary'
  ],
  // testURL：该选项是设置jsdom环境的参数。
  testURL: 'http://localhost/'
}
