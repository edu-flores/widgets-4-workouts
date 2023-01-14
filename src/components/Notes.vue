<template>
  <section>
    <div class="mb-3">
      <h6><b>Notes</b></h6>
    </div>
    <!-- Edit Section -->
    <div contenteditable="true">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

section {
  border-top: 1px solid $lighter;
  margin-left: -2rem;
  padding: 1.5rem 2rem;
  width: calc(100% + 4rem);
  min-height: calc(100% + 1.5rem);
}

@media #{map-get($queries, sm)} {
  section {
    margin-top: -1.5rem;
    margin-left: -1.5rem;
    border-top: 0;
    border-left: 1px solid $lighter;
    height: calc(100% + 3rem);
  }
}

[contenteditable="true"] {
  height: calc(100% - 3rem);
}
</style>
