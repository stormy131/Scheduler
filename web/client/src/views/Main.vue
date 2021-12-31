<template>
  <div class='container'>
    <Menu ref='menu' user='user'></Menu>
    <Projects ref='projects'></Projects>
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
      user: null
    }
  },
  computed: {
    route() {
      return this.$route.path
    }
  },
  mounted() {
    this.user = this.$store.getters.user;
  },
}
</script>

<style scoped>

</style>
