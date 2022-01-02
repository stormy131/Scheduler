<template>
  <div class="item">
    <div class="name">{{ project.name }}</div>
    <button class="activate">
      <span v-show="!(project.status === true)">Activate</span>
    </button>
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

<style scoped></style>
