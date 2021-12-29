<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    if (!this.$parent.$SSO.loggedin()) {
      this.$parent.$router.push('/auth')
    }
  }
}
</script>
<style>
@import './assets/styles.css';
</style>
