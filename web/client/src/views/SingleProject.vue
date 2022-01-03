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
    };
  }
};
</script>

<style scoped></style>
