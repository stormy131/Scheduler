<template>
  <div class="container">
    <Menu ref="menu" user="user"></Menu>
    <Project ref="project"></Project>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Project from "../components/Project";
import request from "../plugins/request";

export default {
  name: "SingleProject",

  components: {
    Menu,
    Project,
  },
  data() {
    return {
      user: null
    }
  },
  mounted() {
    request('/api/account').then(data => {
      this.user = data;
    })
  },
}
</script>

<style scoped>

</style>