<template>
  <main class="main">
    <header class="main__header">
      <div class="header__left">
        <h3 class="main__heading">{{ project.name }}</h3>
        <button class="main__edit" @click="isEdit = !isEdit">Edit</button>
        <router-link class="main__projects" :to="{ path: '/projects' }">
          <i class="fas fa-chevron-left"></i>
          All projects
        </router-link>
      </div>
      <div class="header__right">
        <form action="#">
          <label>
            <input class="main__search" placeholder="Search..." type="text" />
          </label>
          <button class="main__submit-search" type="submit"><i class="fas fa-search"></i></button>
        </form>
      </div>
    </header>
    <div class="main__sort-tasks">
      <div class="main__sort-tasks__pages">
        <button class="main__sort-tasks-page">Tasks</button>
      </div>
      <div class="main__sort-tasks__buttons">
        <button class="main__sort-tasks__button" @click="isCreate = !isCreate">+ Create Task</button>
      </div>
    </div>
    <div class="main__tasks">
      <p class="main__par main__tasks_count">
        <span class="active">{{ projectCount }}</span> items in result
      </p>
      <div class="main__tasks-body">
        <Task v-for="task of project.tasks" :key="task.id" :task="task" @deleteTask="deleteTask($event)"></Task>
        <div class="create__task">
          <button class="create__task_button" @click="isCreate = !isCreate">
            <i class="fas fa-plus"></i>
          </button>
          <p class="create__task__text">Create task</p>
        </div>
      </div>
    </div>
    <NewTask v-show="isCreate" @created="newTask($event)"></NewTask>
  </main>
</template>

<script>
import Task from './Task';
import NewTask from './NewTask';

export default {
  props: {
    project: Object,
  },
  name: 'Project',
  data() {
    return {
      isEdit: false,
      isCreate: false,
    };
  },
  components: {
    Task,
    NewTask,
  },
  methods: {
    editHandler() {
      this.isEdit = true;
    },
    newTask(data) {
      console.log(data);
      if (data) this.project.tasks.push(data);
      this.isCreate = !this.isCreate;
    },
    deleteTask(id) {
      this.$catchWrapper(this)(this.$http.delete, `/tasks/${id}`).then(() => {
        this.tasks.splice(
          this.project.tasks.findIndex((item) => item.id === id),
          1
        );
      });
    },
    showTask() {
      this.isCreated = !this.isCreate;
    },
  },
  computed: {
    projectCount() {
      return this.project.tasks.length;
    },
  },
};
</script>

<style scoped></style>
