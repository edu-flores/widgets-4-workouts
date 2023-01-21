<script setup>
// Utils
import { formatNumber } from '../utils/utils';

// Props
const props = defineProps({
  name: String,
  progress: Number,
  limit: Number,
  units: String
});
</script>

<template>
  <div>
    <p class="goal"><b>{{ name }}</b></p>
    <progress class="w-100" :value="progress" :max="limit"></progress>
    <div class="text-end">
      <span>{{ formatNumber(progress) }} / {{ formatNumber(limit) }} {{ units }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

p {
  color: $darker;
  font-size: medium;
  margin-bottom: -0.2rem;
}

span {
  font-size: small;
}
</style>
