<template>
  <div class="container">
    <Menu :user="user"></Menu>
    <Project v-if="project" :project="project"></Project>
    <Error ref='error'></Error>
  </div>
</template>

<script>
import Menu from '../components/Menu';
import Project from '../components/Project';
import Error from '../components/Error'
export default {
  name: 'SingleProject',

  components: {
    Menu,
    Project,
    Error
  },
  data() {
    return {
      user: this.$store.getters.user,
      project: null,
    };
  },
  mounted() {
    this.$catchWrapper(this)(this.$http.get, `/projects/${this.$route.params.id}`)
      .then((resp) => this.project = resp.data);
  },
  errorCaptured(err) {
    this.$refs.error.setError(err);
  }
};
</script>
