<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">School Management</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/grades" class="nav-link">Grades</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/students" class="nav-link">Students</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/teachers" class="nav-link">Teachers</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/course-management" class="nav-link"
              >Course Management</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5; /* Light grey background for all pages */
  color: #333;
}
.list-group-item {
  cursor: pointer; /* Indicates that list items are interactive */
}
</style>
