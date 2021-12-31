<template>
  <div class="container">
    <Menu ref="menu" user="user"></Menu>
    <Projects ref="projects"></Projects>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Projects from "../components/Projects";
import request from "../plugins/request.js"

export default {
  name: "Main",
  components: {
    Menu,
    Projects,
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    route() {
      return this.$route.path
    }
  },
  mounted() {
    request('/api/').then(data => {
      this.user = data;
    })
  },
}
</script>

<style scoped>

</style>