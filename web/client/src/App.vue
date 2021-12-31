<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$parent.$router.push('/auth');
  }
}
</script>
<style>
@import './assets/styles.css';

</style>
