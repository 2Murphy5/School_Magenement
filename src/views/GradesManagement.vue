<template>
  <div class="container">
    <h1>Grades</h1>
    <add-item @add-item="addGrade"></add-item>
    <ul class="list-group">
      <li v-for="grade in grades" :key="grade" class="list-group-item">
        {{ grade }}
        <delete-item @delete-item="deleteGrade(grade)"></delete-item>
      </li>
    </ul>
  </div>
</template>

<script>
import AddItem from "../components/AddItem.vue";
import DeleteItem from "../components/DeleteItem.vue";

export default {
  name: "GradesManagement",
  components: {
    AddItem,
    DeleteItem,
  },
  data() {
    return {
      grades: [],
    };
  },
  methods: {
    addGrade(newGrade) {
      this.grades.push(newGrade);
    },
    deleteGrade(grade) {
      this.grades = this.grades.filter((g) => g !== grade);
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
