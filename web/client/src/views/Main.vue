<template>
  <div class="container">
    <Menu ref="menu" v-bind:user="user"></Menu>
    <Projects ref="projects"></Projects>
    <Error ref="error"></Error>
  </div>
</template>

<script>
import Menu from '../components/Menu';
import Projects from '../components/Projects';

export default {
  name: 'Main',
  components: {
    Menu,
    Projects,
  },
  data() {
    return {
      user: this.$store.getters.user,
    };
  },
  computed: {
    route() {
      return this.$route.path;
    },
  },
  errorCaptured(err) {
    this.$refs.error.setError(err);
  },
};
</script>
