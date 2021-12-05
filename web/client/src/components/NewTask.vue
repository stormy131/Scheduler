<template>
  <div class="new-task">
    <h3 class="new-task__heading">Create a new Task</h3>
    <form action="#">
      <fieldset class="new-task__input">
        <legend>Task</legend>
        <label>
          <input type="text" placeholder="e.g. Website Design" name="name">
        </label>
        <input type="radio" name="importance" id="importance">
        <label for="importance">importance</label>
        <input type="radio" name="urgency" id="urgency">
        <label for="importance">urgency</label>
      </fieldset>
      <fieldset class="new-task__input">
        <legend>Deadline date(optional)</legend>
        <label>
          <input type="date" placeholder="__/__/__">
        </label>
      </fieldset>
      <button class="new-task__cancel">Cancel</button>
      <button class="new-task__create">Create</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "NewTask"
}
</script>

<style scoped>

</style>