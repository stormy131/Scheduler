<template>
  <div>
    <Menu user="user"></Menu>
    <Projects v-if="route === '/projects'"></Projects>
    <Project v-else-if="route === '/projects'"> </Project>
    <div>404 v-else</div>
  </div>
</template>

<script>
import Project from "../components/Project";
import Menu from "../components/Menu";
import Projects from "../components/Projects";
import request from "../plugins/request.js"
export default {
  name: "Main",
  components: {
    Menu,
    Project,
    Projects,
  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    setUser() {
      request('/api/').then(data => {
        this.user = data;
      })
    }
  },
  computed: {
    route() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

</style>