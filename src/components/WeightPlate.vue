<script setup>
// Props
const props = defineProps({
  weight: Number
});
</script>

<template>
  <div>
    <span>{{ weight }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

div {
  background-color: red;
  border-radius: 3px;
  margin-right: 1px;
  width: 0.75rem;
  height: 100%;
  writing-mode: vertical-lr;
  @include flexbox(column, center, center);
}

span {
  font-size: xx-small;
  color: white;
  font-weight: bold;
  letter-spacing: 0.8px;
}
</style>
