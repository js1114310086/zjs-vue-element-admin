// build.js是webpack的打包文件，通过配置package.json中的script来执行脚本。命令号npm run build即运行node build/build.js
const { run } = require('runjs')
//导入chalk模块 用来改变文字颜色
const chalk = require('chalk')
// 导入vue.config.js文件
const config = require('../vue.config.js')
//process.env是一个包含用户环境信息的对象 NODE_ENV是用户自定义的变量，用来判断是开发环境还是生产环境
/**
 * process.argv 属性会返回一个数组，其中包含当 Node.js 进程被启动时传入的命令行参数。
 * 第一个元素是 process.execPath。 如果需要访问 argv[0] 的原始值，则参见 process.argv0。
 * 第二个元素是正被执行的 JavaScript 文件的路径。 其余的元素是任何额外的命令行参数。
 */
const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')

if (process.env.npm_config_preview || rawArgv.includes('--preview')) {
  const report = rawArgv.includes('--report')

  run(`vue-cli-service build ${args}`)

  const port = 9526
  const publicPath = config.publicPath

  var connect = require('connect')
  var serveStatic = require('serve-static')
  const app = connect()

  app.use(
    publicPath,
    serveStatic('./dist', {
      index: ['index.html', '/']
    })
  )

  app.listen(port, function() {
    console.log(chalk.green(`> Preview at  http://localhost:${port}${publicPath}`))
    if (report) {
      console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}report.html`))
    }

  })
} else {
  run(`vue-cli-service build ${args}`)
}
