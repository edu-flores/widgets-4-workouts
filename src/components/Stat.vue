<script setup>
import Icon from './icons/IconVolume.vue';

const props = defineProps({
  icon: Element,
  opacity: Number,
  data: String,
  label: String
});
</script>

<template>
  <div class="d-flex">
    <div class="stat--icon d-flex me-3">
      <Icon />
    </div>
    <div>
      <p class="mb-1"><b>1,346 lbs</b></p>
      <p>Total Volume</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.stat--icon {
  border-radius: 100%;
  background-color: $primary;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
}

b {
  color: $darker;
  font-size: medium;
}

p {
  margin: 0;
  font-size: small;
}
</style>
