<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  created: function () {
    this.$http.interceptors.response.use(null, (err) => {
      return new Promise(() => {
        console.log(err);
        if (err.status === 401 && err.config) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  }
}
</script>
<style>
@import './assets/styles.css';

</style>
