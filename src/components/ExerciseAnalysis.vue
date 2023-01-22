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
    <p class="text-center badge">{{ name }}</p>
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
  background-color: $darker !important;
  color: $lighter;
  width: 100%;
  font-size: medium;
  font-weight: normal;
}
</style>
