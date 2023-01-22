<script setup>
// Vue API
import { ref } from 'vue';

// Bottom text editor
import Editor from '../Editor.vue';

// Get range from highlighted text
let range = ref({});
const getSelection = () => {
  const selection = window.getSelection();
  range.value = selection.getRangeAt(0);
}
</script>

<template>
  <section class="h-100" @mouseup="getSelection" @keyup="getSelection">
    <!-- Title -->
    <div class="mb-3">
      <h6><b>Notes</b></h6>
    </div>
    <!-- Edit Section -->
    <div class="edit-container">
      <div contenteditable="true"></div>
    </div>
    <!-- Styling -->
    <Editor :range="range" />
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

section {
  position: relative;
}

.edit-container {
  height: 13rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

[contenteditable="true"] {
  height: 100%;

  &:focus {
    outline: none;
  }
}

.bold {
  font-weight: bold;
}
.italic {
  font-style: italic;
}
.underline {
  text-decoration: underline;
}
.strike {
  text-decoration: line-through;
}

::-webkit-scrollbar {
  display: none;
}
</style>
