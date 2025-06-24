import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useNoteStore = defineStore("note", () => {
  // State : liste des notes
  const notes = ref([]);

  // Action : ajouter une note
  function addNote(note) {
    
    notes.value.push({ id: Date.now(), ...note });
  }

 
  function deleteNote(id) {
    notes.value = notes.value.filter((note) => note.id !== id);
  }

  // Getter : nombre total de notes
  const totalNotes = computed(() => notes.value.length);

  return { notes, addNote, deleteNote, totalNotes };
});
