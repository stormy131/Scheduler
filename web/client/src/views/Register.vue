<template>
  <form class="register-form" @submit.prevent="submitHandler">
    <div class="welcome">Welcome</div>
    <div class="heading">Create an account</div>
    <div class="subheading">Already have an account? <router-link href="/auth">Sign in.</router-link></div>
    <label>Email address <input name="email" type="text"></label>
    <div class="name">
      <label>First name <input name="firstName" type="text"></label>
      <label>Last name <input name="lastName" type="text"></label>
    </div>
    <label>Password <input name="password" type="password"></label>
    <button type="submit">Create account</button>
  </form>
</template>

<script>
export default {
  name: "Register",
}
</script>

<style scoped>

</style>