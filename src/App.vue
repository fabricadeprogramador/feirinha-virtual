<template>
  <div class="box-border font-serif">
    <div
      class="
        bg-green-600
        p-2
        mt-40
        sm:w-1/2
        sm:p-12
        lg:w-2/5
        xl:w-2/6
        m-auto
        text-center
        rounded-tr-2xl rounded-bl-xl
      "
    >
      <h1 class="text-5xl text-white m-auto">Feirinha Virtual</h1>
      <div class="border-red p-8 m-auto outline-none">
        <div class="flex justify-center">
          <div class="flex flex-col">
            <div class="flex flex-row">
              <div
                class="
                  flex
                  items-center
                  p-2
                  border-2 border-gray-500
                  bg-gray-300
                  rounded-tr-md
                "
              >
                <ion-icon name="at-outline"></ion-icon>
              </div>

              <input
                class="
                  p-2
                  rounded-tl-md rounded-br-md
                  outline-none
                  border-2 border-gray-500
                  bg-gray-300
                  
                "
                type="email"
                placeholder="Email"
              />
            </div>

            <div class="flex flex-row">
              <div
                class="
                  flex
                  items-center
                  p-2
                  border-2 border-gray-500
                  bg-gray-300
                  rounded-tr-md
                "
              >
                <ion-icon name="lock-closed-outline"></ion-icon>
              </div>
              <input
                class="
                  p-2
                  rounded-tl-md rounded-br-md
                  outline-none
                  border-2 border-gray-500
                  bg-gray-300
                "
                type="password"
                placeholder="Senha"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row justify-center gap-2">
        <app-btn> Entrar</app-btn>
        <app-btn> Registrar-se</app-btn>
      </div>
    </div>
  </div>
</template>

<script>
import AppBtn from "./components/AppBtn.vue";
export default {
  name: "App",
  components: {
    AppBtn,
  },
};
</script>