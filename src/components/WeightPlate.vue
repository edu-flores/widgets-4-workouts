<script setup>
import { computed } from 'vue';

// Props
const props = defineProps({
  weight: Number
});

// Height and color of the plate
const style = computed(() => {
  let color, height;
  switch (props.weight) {
    case 45:
      color = '#b64641';
      height = '65px';
      break;
    case 35:
      color = '#3e5e95';
      height = '60px';
      break;
    case 25:
      color = '#e7c63d';
      height = '55px';
      break;
    case 10:
      color = '#41ac4b';
      height = '50px';
      break;
    case 5:
      color = '#1f2125';
      height = '45px';
      break;
    case 2.5:
      color = '#858c93';
      height = '40px';
      break;
    }
  return `background-color: ${color}; height: ${height};`
});
</script>

<template>
  <div :style="style">
    <span>{{ weight }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

div {
  @include flexbox(column, center, center);
  border-radius: 3px;
  width: 0.75rem;
  writing-mode: vertical-lr;
}

span {
  font-size: xx-small;
  color: white;
  letter-spacing: 0.5px;
}
</style>
