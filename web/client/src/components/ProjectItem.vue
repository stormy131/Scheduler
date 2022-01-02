<template>
  <div class="item">
    <div class="name"><router-link :to="{ path: `/projects/${project.id}` }">{{ project.name }}</router-link></div>
    <div class='activate__container'>
      <button class="activate" v-show="!(project.active === true)" @click="updateStatus">Activate</button>
    </div>
    <div class="status" :class="[project.active ? 'true' : 'false']">{{ project.active }}</div>
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
  methods: {
    click() {
      this.$emit('addTask', this.project.id);
    },
    updateStatus() {
      this.$http.patch(`/projects/${this.project.id}`)
        .then(() => {
          this.project.active = !this.project.active;
          this.$emit('changeStatus', this.project.id);
        }).catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>
@import "../assets/styles.css";
</style>
