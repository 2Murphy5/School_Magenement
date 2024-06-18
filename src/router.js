import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import GradesManagement from "./views/GradesManagement.vue";
import Students from "./views/Students.vue";
import TeachersManagement from "./views/TeachersManagement.vue";
import CourseManagement from "./views/CourseManagement.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/grades", component: GradesManagement },
  { path: "/students", component: Students },
  { path: "/teachers", component: TeachersManagement },
  { path: "/course-management", component: CourseManagement },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
