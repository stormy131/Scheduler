<template>
  <div class="menu__button" @click="clickHandler">
    <img src="{{ src }}" alt="{{ name }}}" class="menu__svg">
    <p>Reports</p>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  props: ['href, name'],
  computed: {
    src() {
      return `../assets/${name.toLowerCase()}.svg`
    }
  },
  methods: {
    clickHandler() {
      this.$parent.$refs.$router.go(this.href);
    }
  }
}
</script>

<style scoped>

</style>