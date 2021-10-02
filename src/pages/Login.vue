<template>
  <app-alert ref="alert">
    {{ loginError }}
  </app-alert>

  <div class="box-border">
    <div
      class="
        bg-green-400
        p-2
        mt-40
        sm:w-1/2
        sm:p-12
        lg:w-2/5
        xl:w-2/6
        m-auto
        text-center
        rounded-md
        shadow-lg
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
                v-model="user.email"
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
                v-model="user.password"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row justify-center gap-2">
        <app-button @click="login" class="bg-white text-green-400">
          Entrar</app-button
        >
        <app-button class="bg-white text-green-400"> Registrar-se</app-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "./../components/AppButton.vue";
import AppAlert from "./../components/AppAlert.vue";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
      loginError: "",
    };
  },
  methods: {
    async login() {
      // Request para a api
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          this.user
        );
        // Redirecionar para a página home
        this.$router.push("/home")
      } catch (error) {
        // Exibir o alerta
        this.loginError = error.response.data.message;
        this.$refs.alert.open();
      }
    },
  },
};
</script>

<style>
</style>