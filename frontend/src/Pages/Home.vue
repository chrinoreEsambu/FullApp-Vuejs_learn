<template>
  <div class="max-w-xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Liste des notes ({{ totalNotes }})</h1>
    <ul>
      <li
        v-for="note in notes"
        :key="note.id"
        class="border p-3 mb-2 rounded flex justify-between items-center"
      >
        <div>
          <h2 class="font-semibold">{{ note.title }}</h2>
          <p class="text-gray-600">{{ note.content }}</p>
        </div>
        <button
          @click="deleteNote(note.id)"
          class="text-red-500 hover:text-red-700 font-bold"
        >
          Supprimer
        </button>
      </li>
    </ul>
    <p v-if="notes.length === 0" class="text-center text-gray-500">
      Aucune note pour le moment.
    </p>
  </div>
</template>

<script setup>
import { useNoteStore } from "../stores/noteStore";

const noteStore = useNoteStore();

const { notes, deleteNote, totalNotes } = noteStore;
</script>

<style lang="scss" scoped></style>
