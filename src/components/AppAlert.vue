<template>
  <div
    v-show="show"
    class="
      bg-black bg-opacity-30
      absolute
      top-0
      left-0
      w-full
      h-full
      flex
      justify-center
      z-50
    "
  >
    <div
      class="
        bg-white
        self-center
        w-1/4
        p-10
        rounded-md
        drop-shadow-md
        text-lg
      "
    >
      <slot></slot>
      <div class="mt-5 text-base flex justify-end">
        <app-button @click="close" class="text-red-500">Fechar</app-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "./AppButton.vue";
</script>

<script>
export default {
  data(){
    return {
      show: false
    }
  },
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
    }
  }
};
</script>

<style>
</style>