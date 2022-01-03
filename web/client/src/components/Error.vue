<template>
  <div class='error-block' v-if='isVisible'>
    <p class='error-msg'>
      <button class='close-btn' @click="setError('')">&times;</button>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data() {
    return {
      text: ''
    };
  },
  methods: {
    setError(error) {
      this.text = error;
    }
  },
  computed: {
    isVisible() {
      return this.text !== '';
    }
  }
};
</script>

<style scoped>
.error-msg {
  padding: 30px 20px;
  background-color: red;
  color: white;
  position: relative;
}

.error-block {
  background-color: rgba(0, 0, 0, .5);
  justify-content: center;
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
}

.close-btn {
  font-size: 1.5em;
  top: -40px;
  position: absolute;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-weight: bold;
}
</style>