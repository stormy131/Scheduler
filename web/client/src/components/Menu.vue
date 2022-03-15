<template>
  <div class="menu">
    <div class="menu__container">
      <div class="menu__user">
        <img alt="Avatar" class="menu__avatar" src="../assets/avatar.jpg" />
        <div class="menu__info">
          <h3 class="menu__username">{{ username }}</h3>
          <p class="menu__position">{{ position }}</p>
        </div>
      </div>
      <MenuButton href="projects" name="Projects"></MenuButton>
      <MenuButton href="calendar" name="Calendar"></MenuButton>
      <MenuButton href="reports" name="Reports"></MenuButton>
      <div class="menu__logout" @click="logout">
        <i class="fas fa-sign-out-alt"></i>
        <p>Logout</p>
      </div>
    </div>
  </div>
</template>
<script>
import MenuButton from './MenuButton';

export default {
  name: 'Menu',
  props: {
    user: Object,
  },
  data() {
    return {
      username: this.user.name,
      position: 'Project manager',
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => this.$router.push('/'));
    },
  },
  components: {
    MenuButton,
  },
};
</script>
