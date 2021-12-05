<template>
  <div class="subtask">
    <h4 class="main__task_done" v-bind:html="$parent.statuses[status]"><i class="fas fa-check"></i> Done</h4>
    <h4 class="task_title">Какое то злоебучее подзадание</h4>
    <p class="subtask__date">Mar 24</p>
  </div>
</template>

<script>
export default {
  name: "Subtask",
  data() {
    return {
      name: 'Какое то злоебучее подзадание',
      date: 'Mar 24',
      status: 'done',
    }
  }

}
</script>

<style scoped>

</style>