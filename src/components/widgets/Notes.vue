<script setup>
import Editor from '../Editor.vue';
</script>

<template>
  <section class="h-100">
    <div class="mb-3">
      <h6><b>Notes</b></h6>
    </div>
    <!-- Edit Section -->
    <div contenteditable="true"></div>
    <!-- Styling -->
    <Editor />
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

[contenteditable="true"]:focus {
  height: 100%;

  &:focus {
    outline: none;
  }
}
</style>
