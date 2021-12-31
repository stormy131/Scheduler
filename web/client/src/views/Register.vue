<template>
  <form class="register-form" @submit.prevent="submitHandler">
    <div class="welcome">Welcome</div>
    <div class="heading">Create an account</div>
    <div class="subheading">Already have an account?
      <router-link :to="{ path: '/login'}">Sign in.</router-link>
    </div>
    <label>Email address <input v-model.lazy="email" name="email" type="text"></label>
    <div class="name">
      <label>First name <input v-model.lazy="firstName" name="firstName" type="text"></label>
      <label>Last name <input v-model.lazy="lastName" name="lastName" type="text"></label>
    </div>
    <label>Password <input v-model.lazy="password" name="password" type="password"></label>
    <button type="submit">Create account</button>
  </form>
</template>

<script>

export default {
  name: "Register",
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    }
  },
  methods: {
    submitHandler() {
      window.axios.post('/auth/reg', {
        email: this.email,
        password: this.password,
        name: `${this.firstName} ${this.lastName}`,
      }).then(r => {
        console.log(r);
        alert('Register successful, proceed to login');
        this.$router.push('/login');
      });

    }
  }
}
</script>

<style scoped>
* {
  font-family: Noto Sans, sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: #17191E;
  display: flex;
  align-items: center;
  justify-content: center;;
}

form {
  width: 678px;
  height: 749px;
  background: #1B1D22;
  padding: 64px 109px;
}

input {
  display: block;
  width: 100%;
  background: none;
  border: 0;
  border-bottom: 1px solid #5893F7;
  color: #fff;
  margin-top: 16px;
}

label {
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  display: block;
  margin-bottom: 60px;
}

button {
  display: block;
  margin: 86px 0 0 auto;
  padding: 15px 0;
  width: 141px;
  background: #5893F7;
  border-radius: 10px;
  font-weight: 600;
  font-size: 13.33px;
  color: white;
  border: 0;
}

form .welcome {
  font-weight: 600;
  font-size: 28px;
  color: #FFFFFF;
  margin: 0 auto 35px auto;
  width: fit-content
}

form .heading {
  font-weight: 600;
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 16px;
}

form .subheading {
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 44px;
}

form .subheading a {
  font-weight: 600;
  font-size: 14px;
  color: #5893F7;
  text-decoration: none;
}

form .name {
  display: flex;
  justify-content: space-between;
}
</style>