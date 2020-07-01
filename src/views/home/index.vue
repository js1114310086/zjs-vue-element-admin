<template>
  <div class="app-container">
    <div>
      <div>测试computed</div>
      <div>{{ fullName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        console.log('获取值')
        return `姓为：${this.firstName} 名为：${this.lastName}`
      },
      // setter
      set(newValue) {
        var names = newValue.split(' ')
        console.log(names)
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    this.testLaodFUun()
  },
  destroyed() {
  },
  methods: {
    testLaodFUun() {
      setTimeout(() => {
        console.log('1')
        alert('hellow')
        this.fullName = '娜可 露露'
      }, 5000)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
