/*eslint-disable*/
<template>
  <div class="home">
    <h1>Welcome to the XDF School Management System</h1>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  min-height: 100vh; /* Ensures the container is at least as tall as the viewport */
  background-image: url("/Users/weiminyuen/Desktop/截图/原神/原神壁纸.jpg");
  background-size: cover; /* Ensures the image covers the entire element */
  background-position: center; /* Centers the image */
  color: #fff; /* Ensures text is white for readability */
  display: flex;
  flex-direction: column;
  justify-content: center; /* This will vertically center the content */
}
</style>
