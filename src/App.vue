<template>

<nav class="bg-green-400">
  <ul class="h-16 flex text-white text-xl justify-end px-14 items-center">
    <router-link class="mx-2" to="/">Home</router-link>
    <router-link class="mx-2" to="/perfil">Perfil</router-link>
    <router-link class="mx-2" to="/login">Login</router-link>
  </ul>
</nav>

<!-- SPA -->
<router-view></router-view>
 
</template>

<script>
export default {
  name: "App",
};
</script>