<template>
  <div class="item">
    <div class="name">{{ project.name }}</div>
    <div class='activate__container'>
      <button class="activate" v-show="!(project.status === true)">Activate</button>
    </div>
    <div class="status">{{ project.active }}</div>
    <div class="date">{{ project.createdAt }}</div>
    <div class="tasks">{{ project.tasks }}</div>
    <button class="add" @click="click">+ Add tasks</button>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    project: Object,
  },
  mounted() {},
  methods: {
    click() {
      this.$emit('addTask', this.project.id);
    },
  },
};
</script>

<style scoped>
@import "../assets/styles.css";
</style>
