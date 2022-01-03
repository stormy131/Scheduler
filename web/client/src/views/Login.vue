<template>
  <div class='container'>
    <form class="login-form" @submit.prevent="submitHandler">
      <div class="welcome">Welcome</div>
      <div class="heading">Sign in</div>
      <div class="subheading">
        New user?
        <router-link :to="{ path: '/auth/reg' }">Create an account.</router-link>
      </div>
      <label>Email address <input v-model.lazy="email" name="email" type="text" /></label>
      <label>Password <input v-model.lazy="password" name="password" type="password" /></label>
      <button type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitHandler() {
      let email = this.email;
      let password = this.password;
      const data = {
        email,
        password,
      };
      this.$catchWrapper(this.$store.dispatch, this.$error.setError, 'login', data)
        .then(() => this.$router.push('/projects'));
    },
  },
};
</script>

<style scoped>
* {
  font-family: Noto Sans, sans-serif;
  box-sizing: border-box;
}

.container {
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: #17191e;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  width: 678px;
  height: 100%;
  background: #1b1d22;
  padding: 64px 109px;
}

input {
  display: block;
  width: 100%;
  background: none;
  border: 0;
  border-bottom: 1px solid #5893f7;
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
  background: #5893f7;
  border-radius: 10px;
  font-weight: 600;
  font-size: 13.33px;
  color: white;
  border: 0;
}

form .welcome {
  font-weight: 600;
  font-size: 28px;
  color: #ffffff;
  margin: 0 auto 35px auto;
  width: fit-content;
}

form .heading {
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
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
  color: #5893f7;
  text-decoration: none;
}
</style>
