<template>
  <div>
    <div class="text-2xl font-bold text-blue-600 flex flex-col">
      Bonjour Vue + Tailwind !
      <input type="bg" class="border-black rounded-[5px]" />
      <!-- <router-link :to="{ name: 'register' }">go to register</router-link> -->
      <label @click="register">go to page</label>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const register = () => {
  router.push("/register");
};
</script>

<style lang="scss" scoped></style>
