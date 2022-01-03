<template>
  <main class="main">
    <header class="main__header">
      <div class="header__left">
        <h3 class="main__heading">{{ project.projectName }}</h3>
        <button class="main__edit" @click="isEdit = !isEdit">Edit</button>
        <router-link class="main__projects" to="{path: '/projects'}}">
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
        <Task v-for="task of tasks" :key="task.id" :task="task"></Task>
        <div class="create__task">
          <button class="create__task_button">
            <i class="fas fa-plus"></i>
          </button>
          <p class="create__task__text" @click="isCreate = !isCreate">Create task</p>
        </div>
      </div>
    </div>
    <NewTask v-show="isEdit" @created="newTask($event)"></NewTask>
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
      tasks: [],
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
      this.tasks.push(data);
    },
    deleteTask(id) {
      this.$http
        .delete(`/tasks/${id}`)
        .then(() => {
          this.tasks.splice(
            this.tasks.findIndex((item) => item.id === id),
            1
          );
        })
        .catch((err) => console.log(err));
    }
  },
  computed: {
    projectCount() {
      return this.tasks.length;
    },
  },
  mounted() {
    this.$http.get(`/project/${this.project.id}`)
      .then((resp) => {
        console.log(resp);
        this.tasks = [...resp.data];
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped></style>
