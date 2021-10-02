<template>

<app-nav-bar></app-nav-bar>

<!-- SPA -->
<router-view></router-view>

<app-footer></app-footer>
 
</template>

<script setup>
import AppNavBar from './components/AppNavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<script>
export default {
  name: "App",
};
</script>