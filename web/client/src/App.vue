<template>
  <div id="app">
    <router-view />
    <Error ref="error"></Error>
  </div>
</template>

<script>
import Error from './components/Error'
export default {
  name: 'App',
  components: {
    Error
  },
  mounted: function () {
    this.$http.interceptors.response.use(null, (err) => {
      return new Promise(() => {
        if (err.status === 403) {
          this.$store.dispatch('logout');
        }
        throw err;
      });
    });
    if (this.$http.defaults.headers.common.usertoken) {
      this.$router.push('/projects');
    }
  },
};
</script>
<style>
@import './assets/styles.css';
</style>
