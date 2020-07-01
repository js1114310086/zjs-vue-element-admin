import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '../store'
import { getToken } from '../utils/auth'

// 创建一个axios实例
const serviceTest = axios.create({
  // 请求地址 基本地址 url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  // 请求超时时长
  timeout: 5000
})
// 拦截器： 在请求或或者响应被处理前拦截他们
// request interceptor 请求拦截器
serviceTest.interceptors.request.use(
  config => {
    // 在发送请求前做些什么
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // 在请求错误的时候做些什么
    return Promise.reject(error)
  }
)

// response interceptor 响应拦截器
serviceTest.interceptors.response.use(
  response => {
    const res = response.data
    // 对请求成功的数据做处理
    if (res.Msg === 'Time') {
      MessageBox.confirm('登陆过期', '提示', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/restToke').then(() => {
          location.reload()
        })
      })
      return Promise.reject(new Error(res.Msg || 'Error'))
    }
    return res
  }, error => {
    // 响应错误做些什么
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default serviceTest
