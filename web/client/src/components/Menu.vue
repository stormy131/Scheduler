<template>
  <div class="menu">
    <div class="menu__container">
      <div class="menu__user">
        <img alt="Tut blyat av netu" class="menu__avatar" src="../assets/avatar.jpg" />
        <div class="menu__info">
          <h3 class="menu__username">{{ username }}</h3>
          <p class="menu__position">{{ position }}</p>
        </div>
      </div>
      <MenuButton href="projects" name="Projects"></MenuButton>
      <MenuButton href="calendar" name="Calendar"></MenuButton>
      <MenuButton href="reports" name="Reports"></MenuButton>
    </div>
  </div>
</template>
<script>
import MenuButton from './MenuButton';

export default {
  name: 'Menu',
  props: {
    user: Object
  },
  data() {
    return {
      username: this.user.name,
      position: 'Project manager',
    };
  },
  components: {
    MenuButton,
  },
};
</script>
