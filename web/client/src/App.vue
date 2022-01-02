<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    this.$http.interceptors.response.use(null, (err) => {
      return new Promise(() => {
        if (err.status === 403) {
          this.$store.dispatch('logout');
        }
        throw err;
      });
    });
  },
};
</script>
<style>
@import './assets/styles.css';
</style>
