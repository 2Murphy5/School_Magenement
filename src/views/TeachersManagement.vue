<template>
  <div class="container">
    <h1>Teachers</h1>
    <add-item @add-item="addTeacher"></add-item>
    <ul class="list-group">
      <li v-for="teacher in teachers" :key="teacher" class="list-group-item">
        {{ teacher }}
        <delete-item @delete-item="deleteTeacher(teacher)"></delete-item>
      </li>
    </ul>
  </div>
</template>

<script>
import AddItem from "../components/AddItem.vue";
import DeleteItem from "../components/DeleteItem.vue";

export default {
  components: {
    AddItem,
    DeleteItem,
  },
  data() {
    return {
      teachers: [],
    };
  },
  methods: {
    addTeacher(newTeacher) {
      this.teachers.push(newTeacher);
    },
    deleteTeacher(teacher) {
      this.teachers = this.teachers.filter((t) => t !== teacher);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  text-align: center;
}
</style>
