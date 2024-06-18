<template>
  <button @click="deleteItem" class="btn btn-danger btn-sm float-right">
    Delete
  </button>
</template>

<script>
export default {
  methods: {
    deleteItem() {
      this.$emit("delete-item");
    },
  },
};
</script>
