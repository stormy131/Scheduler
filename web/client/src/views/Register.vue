<template>
  <form class="register-form" @submit.prevent="submitHandler">
    <div class="welcome">Welcome</div>
    <div class="heading">Create an account</div>
    <div class="subheading">Already have an account? <router-link href="/auth">Sign in.</router-link></div>
    <label>Email address <input name="email" type="text" v-model.lazy="email"></label>
    <div class="name">
      <label>First name <input name="firstName" type="text" v-model.lazy="firstName"></label>
      <label>Last name <input name="lastName" type="text" v-model.lazy="lastName"></label>
    </div>
    <label>Password <input name="password" type="password" v-model.lazy="password"></label>
    <button type="submit">Create account</button>
  </form>
</template>

<script>
import request from "../plugins/request";

export default {
  name: "Register",
  data() {
    return {
      email:'',
      firstName: '',
      lastName: '',
      password: '',
    }
  },
  methods: {
    submitHandler() {
      request('/auth/reg', 'POST', {
        email: this.email,
        password: this.password,
        name: `${this.firstName} ${this.lastName}`,
      })
    }
  }
}
</script>

<style scoped>

</style>