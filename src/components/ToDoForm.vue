<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        What needs to be done?
      </label>
    </h2>
     <el-input
      type="text"
      id="new-todo-input"
      name="new-todo"
      v-model.trim="label" 
      placeholder="Enter what you need to do"
      clearable
      class="input__lg"
      size="large"
      round
      :style="{ 'border-radius': '50px' }" />
    <button type="submit" class="btn btn__primary btn__lg">Add</button>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
    },
  },
  data() {
    return {
      label: "",
    };
  },
};
</script>
