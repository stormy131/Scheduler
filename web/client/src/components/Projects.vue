<template>
  <div class="main">
    <div class="title">Projects</div>
    <ProjectItem v-for="project of projects" :key="project.id" project="project"></ProjectItem>
    <h3 v-show="projects.length < 1">No projects</h3>
    <div class="item new">
      <div class="create" @click="!showEdit"><span></span>Create Project</div>
    </div>
    <div class="new-project" v-show="showEdit">
        <h3>Create a new project</h3>
      <form action="#" class="new-project__form" @submit.prevent="newHandler">
        <label class="new-project__label">
          Name
          <input type="text" class="new-project__input" placeholder="e.g. Website Design">
        </label>
        <button type="submit" class="new-project__submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import ProjectItem from './ProjectItem';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
      showEdit: false
    }
  },
  components: {
    ProjectItem
  },
  methods: {
    newHandler() {

    }
  },
  mounted() {
    this.$http.get('/projects').then(resp => {
      this.projects = [...resp.data];
      console.log(resp.data);
    })
  }
}
</script>

<style scoped>
@import '../assets/styles.css';

* {
  box-sizing: border-box;
}

.main {
  padding: 28px;
  background: #E5E5E5;
}

.main .title {
  margin-bottom: 18px;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}

.main .item {
  display: grid;
  grid-template-columns:repeat(6, minmax(0, 1fr));
  height: 96px;
  margin-bottom: 18px;
  padding: 26px 42px;
  background: #FFFFFF;
  box-shadow: -2px -2px 50px -1px rgba(0, 0, 0, 0.03), 2px 2px 50px -1px rgba(0, 0, 0, 0.03);
  border-radius: 7px;
}

.main .item > div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}

.main .item .activate div {
  width: fit-content;
  padding: 10px 20px;
  background: #3C4DDB;
  border-radius: 7px;
  color: #FFFFFF;
}

.main .item.active .activate div {
  display: none
}

.main .item.headings > div {
  color: rgba(0, 0, 0, 0.5);
}

.main .item.new {
  display: flex;
  justify-content: flex-start;
  padding: 23px 42px;
}

.main .item.new .create {
  color: #3C4DDB;
}

.create div span {
  cursor: pointer;
}

.main .item.new .create span {
  position: relative;
  margin-right: 48px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #3C4DDB
}

.main .item.new .create span:before {
  position: absolute;
  top: 15px;
  left: 25px;
  content: "";
  display: block;
  width: 2px;
  height: 20px;
  background: #fff
}

.main .item.new .create span:after {
  position: absolute;
  top: 15px;
  left: 25px;
  transform: rotate(90deg);
  content: "";
  display: block;
  width: 2px;
  height: 20px;
  background: #fff
}
</style>
