<template>
  <nav class="bg-green-400 flex justify-between px-20 items-center">
    <span class="text-white text-2xl">{{ $route.name }}</span>
    <ul class="h-16 flex text-white text-lg items-center">
      <router-link
        class="mx-2"
        to="/home"
        :class="[
          { 'bg-green-700': $route.name == 'Início' },
          'px-2 py-1 rounded-sm',
        ]"
      >
        <ion-icon id="ion-white" name="home-outline" ></ion-icon>
        Home</router-link
      >

      <router-link
        class="mx-2"
        to="/perfil"
        :class="[
          { 'bg-green-700': $route.name == 'Perfil' },
          'px-2 py-1 rounded-sm',
        ]"
        ><ion-icon id="ion-white" name="person-outline" ></ion-icon>Perfil</router-link
      >
      <router-link class="mx-2" to="/"><ion-icon id="ion-white" name="log-in-outline" size="small" ></ion-icon> Login</router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>