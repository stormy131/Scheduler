<template>
  <div class="item">
    <div class="name"><router-link :to="{ path: `/projects/${project.id}` }">{{ project.name }}</router-link></div>
    <div class='activate__container'>
      <button class="activate" v-show="!(project.active === true)" @click="updateStatus">Activate</button>
    </div>
    <div class="status" :class="[project.active ? 'true' : 'false']">{{ project.active }}</div>
    <div class="date">{{ project.createdAt }}</div>
    <div class="tasks">{{ project.tasks }}</div>
    <button class="add" @click="addTask">+ Add tasks</button>
    <button class='close-button' @click="deleteItem">&times;</button>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    project: Object,
  },
  methods: {
    addTask() {
      this.$emit('addTask', this.project.id);
    },
    updateStatus() {
      this.$emit('changeStatus', this.project.id);
    },
    deleteItem() {
      this.$emit('projectDeleted', this.project.id);
    }
  },
};
</script>

<style scoped>
@import "../assets/styles.css";
</style>
