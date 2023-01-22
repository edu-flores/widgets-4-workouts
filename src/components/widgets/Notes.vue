<script setup>
// Components
import Editor from '../Editor.vue';
</script>

<template>
  <section class="h-100" @mouseup="getSelection" @keyup="getSelection">
    <!-- Title -->
    <div class="mb-auto">
      <h6><b>Notes</b></h6>
    </div>
    <!-- Edit Section -->
    <div class="edit-container mb-auto">
      <div contenteditable="true">
        Have a <i>great</i> workout!
      </div>
    </div>
    <!-- Styling -->
    <Editor />
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

section {
  position: relative;
}

.edit-container {
  width: 100%;
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
