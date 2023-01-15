<script setup>
import Editor from '../Editor.vue';
</script>

<template>
  <section class="h-100">
    <div class="mb-3">
      <h6><b>Notes</b></h6>
    </div>
    <!-- Edit Section -->
    <div class="edit-container">
      <div contenteditable="true"></div>
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
  height: 13rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

[contenteditable="true"] {
  height: 100%;

  &:focus {
    outline: none;
  }
}
</style>
