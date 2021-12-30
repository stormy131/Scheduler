<template>
  <div class="new-task">
    <h3 class="new-task__heading">Create a new Task</h3>
    <form action="#">
      <fieldset class="new-task__input">
        <legend>Task</legend>
        <label>
          <input name="name" placeholder="e.g. Website Design" type="text">
        </label>
        <input id="importance" name="importance" type="radio">
        <label for="importance">importance</label>
        <input id="urgency" name="urgency" type="radio">
        <label for="importance">urgency</label>
      </fieldset>
      <fieldset class="new-task__input">
        <legend>Deadline date(optional)</legend>
        <label>
          <input placeholder="__/__/__" type="date">
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