<template>
  <div class="menu__button" @click="clickHandler">
    <img class="menu__svg" v-bind:alt="name" v-bind:src="src" />
    <p>Reports</p>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    href: String,
    name: String
  },
  computed: {
    src() {
      return require(`../assets/${this.name.toLowerCase()}.svg`);
    },
  },
  methods: {
    clickHandler() {
      this.$router.push('/' + this.href);
    },
  },
};
</script>

<style scoped>
@import '../assets/styles.css';
</style>
