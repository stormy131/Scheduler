<template>
  <div class="item">
    <div class="name">{{ project.name }}</div>
    <button class="activate">
      <div v-show="!(project.status === 'activated')">Activate</div>
    </button>
    <div class="status">{{ project.status }}</div>
    <div class="date">{{ project.deadline }}</div>
    <div class="tasks">{{ project.tasks }}</div>
    <button class="add">+ Add tasks</button>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: ['project'],
}
</script>

<style scoped>

</style>