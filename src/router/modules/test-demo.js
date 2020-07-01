import Layout from '@/layout'

const testDemoRouter = {
  path: '/test-demo',
  component: Layout,
  redirect: '/test-demo/index',
  name: 'Test',
  meta: {
    title: '测试侧边栏'
  },
  children: [
    {
      path: 'index',
      name: 'TestDemo',
      component: () => import('@/views/test-demo/index'),
      meta: {
        title: '测试例子父组件'
      }
    },
    {
      path: 'test-computed',
      name: 'TestComputed',
      component: () => import('@/views/test-demo/test-computed'),
      meta: {
        title: '测试computed'
      }
    }
  ]
}

export default testDemoRouter
