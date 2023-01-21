<script setup>
// Utils
import { formatNumber } from '../utils/utils';

// Props
const props = defineProps({
  name: String,
  volume: Number,
  sets: Number,
  reps: Number,
  orm: Number
});
</script>

<template>
  <div>
    <p class="text-center"><b>{{ name }}</b></p>
    <ul>
      <li><b>Vol</b>: {{ formatNumber(volume) }} lbs</li>
      <li><b>Sets</b>: {{ formatNumber(sets) }}</li>
      <li><b>Reps</b>: {{ formatNumber(reps) }}</li>
      <li><b>1RM</b>: {{ formatNumber(orm) }} lbs</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

p {
  color: $darker;

  b {
    font-size: large;
  }
}
</style>
