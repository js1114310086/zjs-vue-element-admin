<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
    console.log('process--是-->', process)
    console.log('process.env--是-->', process.env)
    console.log('process.env.NODE_ENV--是-->', process.env.NODE_ENV)
    console.log('process.env.VUE_APP_BASE_API--是-->', process.env.VUE_APP_BASE_API)
    console.log('process.env.VUE_APP_BASE_API--是-->', process.env.VUE_APP_DEV_API)
  }
}
</script>
