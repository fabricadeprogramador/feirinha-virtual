<template>
  <div>
    <button
      class="
        m-auto
        text-white text-center text-2xl
        h-12
        w-40
        border-2 border-solid
        rounded-lg
        hover:bg-white
        hover:text-green-400
      "
    >
      <slot> </slot>
    </button>
  </div>
</template>

<script>
export default {
   name: 'AppBtn',
}
</script>