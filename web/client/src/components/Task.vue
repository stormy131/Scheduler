<template>
  <div class="main__task">
    <div class="task">
      <div>
        <h4 class="main__task_pause" v-html="statuses[task.status]"></h4>
        <h4 class="task_title">{{ task.title }}}</h4>
      </div>
      <button class="main__task_show-subtask">View Subtasks({{ task.subtasks.count }}}) <i class="fas fa-angle-down"></i></button>
    </div>
    <div class="main__task__subtasks" >
      <Subtask v-for="item of task.subtasks" :key="item.id" :subtask="item"></Subtask>
    </div>
  </div>
</template>

<script>
import Subtask from 'Subtask.vue';
export default {
  name: "Task",
  props: ['task'],
  data() {
    return {
      statuses: {
        paused: `<i class="fas fa-pause"></i> Paused`,
        progress: `In progress`,
        done: `<i class="fas fa-check"></i> Done`,
      }
    }
  },
  components: {
    Subtask
  },
}
</script>

<style scoped>

</style>