<template>
  <div class="main__task">
    <div class="task">
      <div>
        <h4 :class="`main__task_${task.active}`" v-html="statuses[`${task.active}`]"></h4>
        <h4 class="task_title">{{ task.name }}</h4>
        <h4 class="task_importance">Importance: <span :class="[task.importance ? 'false' : 'true']">{{ task.importance }}</span></h4>
        <h4 class="task_urgency">Urgency: <span :class="[task.urgency ? 'false' : 'true']">{{ task.urgency }}</span></h4>
        <h4 class="task_deadline">Deadline: {{ task.deadline }}</h4>
      </div>
    </div>
    <button class='close-button' @click="$emit('deleteTask', task.id)">&times;</button>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
  data() {
    return {
      statuses: {
        'false': `<i class="fas fa-pause"></i> Paused`,
        'progress': `In progress`,
        'true': `<i class="fas fa-check"></i> Done`,
      },
    };
  },
};
</script>

<style scoped></style>
