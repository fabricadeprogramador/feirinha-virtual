<template>
  <nav class="bg-green-400 flex justify-between px-20 items-center">
    <span class="text-white text-2xl">{{ $route.name }}</span>
    <ul class="h-16 flex text-white text-lg items-center">
      <router-link class="mx-2" to="/home">Home</router-link>
      <router-link class="mx-2" to="/perfil">Perfil</router-link>
      <router-link class="mx-2" to="/">Login</router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>