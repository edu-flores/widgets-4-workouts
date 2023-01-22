<script setup>
// Props
const props = defineProps({
  message: String,
  height: String
});
</script>

<template>
  <div class="container-fluid" :style="`height: ${height};`">
    <div class="rounded-circle">
      <b>!</b>
    </div>
    <p class="mt-2"><i>{{ message }}</i></p>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.container-fluid {
  @include flexbox(column, center, center);
}

.rounded-circle {
  @include flexbox(column, center, center);
  background-color: $light;
  width: 4rem;
  height: 4rem;
}

b {
  font-size: x-large;
}
</style>