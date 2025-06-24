<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <nav class="items-center flex-auto text-center mt-5 ">
    <router-link to="/home" class="text-[#E48707] ">Liste des notes</router-link> |
    <router-link to="/">Ajouter une note</router-link>
  </nav>
  <router-view />
</template>

<style scoped></style>
