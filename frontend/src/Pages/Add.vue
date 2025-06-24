<template>
    <div class="max-w-xl mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Ajouter une nouvelle note</h1>
      <form @submit.prevent="submitNote" class="space-y-4">
        <input
          v-model="title"
          type="text"
          placeholder="Titre"
          class="w-full p-2 border rounded"
          required
        />
        <textarea
          v-model="content"
          placeholder="Contenu"
          rows="5"
          class="w-full p-2 border rounded"
          required
        ></textarea>
        <button type="submit" class="bg-black text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useNoteStore } from "../stores/noteStore";
  
  const noteStore = useNoteStore();
  
  const title = ref("");
  const content = ref("");
  
  function submitNote() {
    noteStore.addNote({
      title: title.value,
      content: content.value,
    });
    // reset form
    title.value = "";
    content.value = "";
    alert("Note ajoutée !");
  }
  </script>
  
  <style lang="scss" scoped></style>
  