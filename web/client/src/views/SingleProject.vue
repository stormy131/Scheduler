<template>
  <div class="container">
    <Menu :user="user"></Menu>
    <Project v-if="project" :project="project"></Project>
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
    this.$catchWrapper(this.$http.get, this.$error.setError, `/projects/${this.$route.params.id}`)
      .then((resp) => this.project = resp.data);
  },
};
</script>

<style scoped></style>
