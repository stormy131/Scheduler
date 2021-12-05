<template>
  <div class="menu">
    <div class="menu__container">
      <div class="menu__user">
        <img src="../assets/avatar.jpg" alt="Tut blyat av netu" class="menu__avatar">
        <div class="menu__info">
          <h3 class="menu__username">{{ name }}</h3>
          <p class="menu__position">{{ position }}}</p>
        </div>
      <MenuButton href="/reports" name="Project"></MenuButton>
      <MenuButton href="/calendar" name="Calendar"></MenuButton>
      <MenuButton href="/reports" name="Reports"></MenuButton>
    </div>
  </div>
</template>
<script>
  import MenuButton from './MenuButton'
  export default {
    name: 'Menu',
    props: ['user'],
    data() {
      return {
        name: 'Name Surname',
        position: 'Project manager'
      }
    },
    components: {
      MenuButton
    }
  }
</script>