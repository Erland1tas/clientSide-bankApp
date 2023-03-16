<template>
  <router-view></router-view>
</template>
<script>
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
export default {
  components: {
    Home,
    Signup
  }
}
</script>
