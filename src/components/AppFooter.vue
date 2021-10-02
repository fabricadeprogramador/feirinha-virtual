<template>
  <div
    class="bg-gray-800 text-white py-4 px-20 absolute w-full bottom-0 right-0"
  >
    <p class="text-lg">Feirinha Virtual</p>
    <p class="text-sm pt-3">
      Todos os direitos reservados <strong>{{ currentYear }}</strong>
    </p>
    <p class="text-sm">
        Campo Grande - MS
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
</style>