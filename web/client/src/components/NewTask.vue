<template>
  <div class="new-task">
    <h3 class="new-task__heading">Create a new Task</h3>
    <form action="#" @submit.prevent="submitHandler">
      <fieldset class="new-task__input">
        <legend>Task</legend>
        <label>
          <input name="name" placeholder="e.g. Website Design" type="text" required v-model.lazy="name" />
        </label>
      </fieldset>
      <div>
        <input id="importance" name="importance" type="checkbox" v-model.lazy="importance" />
        <label for="importance">importance</label><br>
        <input id="urgency" name="urgency" type="checkbox" v-model.lazy="urgency" />
        <label for="importance">urgency</label><br>
      </div>
      <fieldset class="new-task__input">
        <legend>Deadline date(optional)</legend>
        <label>
          <input placeholder="__/__/__" type="date" v-model.lazy="deadline" />
        </label>
      </fieldset>
      <div class="new-task__buttons">
        <button class="new-task__cancel" @click="$emit('created')">Cancel</button>
        <button class="new-task__submit" type="submit">Create</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'NewTask',
  data() {
    return {
      name: '',
      importance: false,
      urgency: false,
      deadline: '',
    };
  },
  methods: {
    submitHandler() {
      this.$http
        .post('/tasks', {
          name: this.name,
          importance: this.importance,
          urgency: this.urgency,
          deadline: this.deadline,
          fromProject: this.$parent.newId,
        })
        .then((r) => {
          this.$emit('created');
          console.log(r);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped></style>
