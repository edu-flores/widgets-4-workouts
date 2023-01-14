<script setup>
import Editor from './Editor.vue';
</script>

<template>
  <section>
    <div class="mb-3">
      <h6><b>Notes</b></h6>
    </div>
    <!-- Edit Section -->
    <div contenteditable="true">
    </div>
    <!-- Styling -->
    <Editor />
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

section {
  border-top: 1px solid $lighter;
  padding: 1.5rem 2rem;
  padding-bottom: 0;
  margin-left: -2rem;
  width: calc(100% + 4rem);
  height: calc(100% + 1.5rem);
}

@media #{map-get($queries, sm)} {
  section {
    margin-top: -1.5rem;
    margin-left: 0;
    border-top: 0;
    border-left: 1px solid $lighter;
    width: calc(100% + 2rem);
    height: calc(100% + 3rem);
  }
}

[contenteditable="true"] {
  height: calc(100% - 4rem);
  
  &:focus {
    outline: none;
  }
}
</style>
