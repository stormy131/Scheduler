<template>
  <main class="main">
    <header class="main__header">
      <div class="header__left">
        <h3 class="main__heading">{{ project.projectName }}</h3>
        <button class="main__edit" @click="editHandler">Edit</button>
        <a class="main__projects" href="#"><i class="fas fa-chevron-left" ></i> All projects</a>
      </div>
      <div class="header__right">
        <form action="#">
          <label>
            <input type="text" class="main__search" placeholder="Search...">
          </label>
          <button class="main__submit-search" type="submit"><i class="fas fa-search"></i></button>
        </form>
      </div>
    </header>
    <div class="main__sort-tasks">
      <div class="main__sort-tasks__pages">
        <button class="main__sort-tasks-page">
          Tasks
        </button>
      </div>
      <div class="main__sort-tasks__buttons">
        <button class="main__sort-tasks__button">
          + Create Task
        </button>
      </div>
    </div>
    <div class="main__tasks">
      <p class="main__par main__tasks_count"><span class="active">{{ projectCount }}</span> items in result</p>
      <div class="main__tasks-body">
        <Task v-for="task of tasks" :key="task.id" :task="task"></Task>
        <div class="create__task">
          <button class="create__task_button">
            <i class="fas fa-plus"></i>
          </button>
          <p class="create__task__text">Create task</p>
        </div>
      </div>
    </div>
    <NewTask v-show="isEdit"></NewTask>
  </main>
</template>

<script>
import Task from './Task'
import NewTask from "./NewTask";
export default {
  props: ['project'],
  name: "Project",
  data() {
    return {
      tasks: [],
      isEdit: false,
    }
  },
  components: {
    Task,
    NewTask,
  },
  methods: {
    editHandler() {
      //TODO
    }
  },
  computed: {
    projectCount() {
      return this.tasks.length
    }
  },
  mounted() {
    this.$root.request('/api/tasks', 'GET', {id: this.$router.params.id}).then(data => {
      this.tasks = data;
    })
  }
}
</script>

<style scoped>

</style>