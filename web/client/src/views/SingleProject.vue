<template>
  <div class="container">
    <Menu ref="menu" user="user"></Menu>
    <Project ref="project"></Project>
  </div>
</template>

<script>
import Menu from '../components/Menu';
import Project from '../components/Project';
export default {
  name: 'SingleProject',

  components: {
    Menu,
    Project,
  },
  data() {
    return {
      user: this.$store.getters.user,
      project: null,
    };
  },
  mounted() {
    this.$http
      .get(`/projects/${this.$route.params.id}`)
      .then((resp) => (this.project = resp.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped></style>
