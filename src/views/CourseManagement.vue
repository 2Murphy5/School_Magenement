<template>
  <div class="container">
    <h1>Course Management</h1>
    <add-item @add-item="addCourse"></add-item>
    <ul class="list-group">
      <li v-for="course in courses" :key="course" class="list-group-item">
        {{ course }}
        <delete-item @delete-item="deleteCourse(course)"></delete-item>
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
      courses: [],
    };
  },
  methods: {
    addCourse(newCourse) {
      this.courses.push(newCourse);
    },
    deleteCourse(course) {
      this.courses = this.courses.filter((c) => c !== course);
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
