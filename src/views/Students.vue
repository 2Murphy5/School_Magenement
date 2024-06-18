/*eslint-disable*/
<template>
  <div class="container">
    <h1>Students</h1>
    <add-item @add-item="addStudent"></add-item>
    <ul class="list-group">
      <li
        v-for="student in students"
        :key="student"
        class="list-group-item"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      >
        {{ student }}
        <delete-item @delete-item="deleteStudent(student)"></delete-item>
      </li>
    </ul>
  </div>
</template>

<script>
import AddItem from "../components/AddItem.vue";
import DeleteItem from "../components/DeleteItem.vue";

export default {
  name: "StudentManagement",
  components: {
    AddItem,
    DeleteItem,
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {
    addStudent(newStudent) {
      this.students.push(newStudent);
    },
    deleteStudent(student) {
      this.students = this.students.filter((s) => s !== student);
    },
    handleMouseOver(event) {
      event.target.style.transform = "scale(1.05)";
      event.target.style.transition = "transform 0.2s";
    },
    handleMouseLeave(event) {
      event.target.style.transform = "scale(1)";
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  text-align: center;
}

.list-group-item {
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
</style>
