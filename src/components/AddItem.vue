<template>
  <div class="add-item">
    <input v-model="newItem" placeholder="Add new item" />
    <button @click="addItem">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
    };
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.$emit("add-item", this.newItem);
        this.newItem = "";
      }
    },
  },
};
</script>

<style scoped>
.add-item {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
