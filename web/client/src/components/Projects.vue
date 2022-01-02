<template>
  <div class="main">
    <div class="title">Projects</div>
    <div class="item">
      <div class="name">Project name</div>
      <div></div>
      <div class="status">Status</div>
      <div class="date">Creation date</div>
      <div class="tasks">Subtasks</div>
      <div class="add">Add subtasks</div>
    </div>
    <ProjectItem
      v-for="project of projects"
      :key="project.id"
      v-bind:project="project"
      ref="projects"
      @addTask="showTask($event)"
      @changeStatus="changeStatus($event)">
    </ProjectItem>
    <div class="item new" @click="show">
      <div class="create"><span></span>Create Project</div>
    </div>
    <div class="new-project" v-show="showEdit">
      <h3>Create a new project</h3>
      <form action="#" class="new-project__form" @submit.prevent="newHandler">
        <div>
          <label for="name" class="new-project__label">Name</label><br />
          <input id="name" type="text" class="new-project__input" placeholder="e.g. Website Design" v-model.lazy="newName" required />
        </div>
        <div class="new-project__buttons">
          <button class="new-project__close" @click="show">Close</button>
          <button type="submit" class="new-project__submit">Create</button>
        </div>
      </form>
    </div>
    <NewTask v-show="taskShow" @created="showTask"></NewTask>
  </div>
</template>

<script>
import ProjectItem from './ProjectItem';
import NewTask from './NewTask';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
      showEdit: false,
      taskShow: false,
      newName: '',
      newId: null,
    };
  },
  components: {
    ProjectItem,
    NewTask,
  },
  methods: {
    newHandler() {
      this.$http
        .post('/projects', {
          name: this.newName,
          id: this.projects.length,
          user: this.$store.getters.user,
        })
        .then(() => {
          this.projects.push({
            name: this.newName,
            id: this.projects.length,
            createdAt: `${new Date().getUTCDate()} ${new Date().toLocaleString('default', { month: 'long' })}`,
            active: false,
            tasks: [].length,
          });
          this.show();
          this.newName = '';
        })
        .catch((e) => console.log(e));
    },
    show() {
      this.showEdit = !this.showEdit;
    },
    showTask(id) {
      this.taskShow = !this.taskShow;
      this.newId = id;
    },
    changeStatus(id) {
      this.projects.forEach(item => {
        if(item.active === true && item.id !== id) item.active = !item.active
      });
    }
  },
  mounted() {
    this.$http.get('/projects').then((resp) => {
      this.projects = resp.data.map(proj => {
        const date = new Date(proj.createdAt);
        proj.createdAt = `${date.getUTCDate()} ${date.toLocaleString('default', { month: 'long' })}`;
        return proj;
      });
    });
  },
};
</script>

<style scoped>
@import '../assets/styles.css';
</style>
