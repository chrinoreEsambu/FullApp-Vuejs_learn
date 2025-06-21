import axios from 'frontend/node_modules/axios/dist/axios.js';
<template>
  <div class="border-box">
    <div class="flex items-center flex-col mt-[5em] p-11">
      <input
        type="text"
        v-model="user_id"
        class="mb-3 p-2 w-[50vw] border-[1px] border-gray-950 rounded[2px]"
      />
      <input
        type="password"
        v-model="password"
        class="mb-3 p-2 w-[50vw] border-[1px] border-gray-950 rounded[2px]"
      />
      <button
        @click="submitlog"
        class="bg-black text-white p-2 w-[50vw] rounded[2px]"
      >
        send
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const user_id = ref("");

</script>

<style lang="scss" scoped></style>
