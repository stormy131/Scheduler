<template>
  <div class="menu__button" @click="clickHandler">
    <img v-bind:src="src" v-bind:alt="this.name" class="menu__svg">
    <p>Reports</p>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  props: ['href, name'],
  computed: {
    src() {
      return `../assets/${this.name.toLowerCase()}.svg`
    }
  },
  methods: {
    clickHandler() {
      this.$parent.$parent.$router.push(this.href);
    }
  }
}
</script>

<style scoped>
@import "../assets/styles.css";
</style>