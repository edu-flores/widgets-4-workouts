<script setup>
import { computed } from 'vue';

// Icon components
import VolumeIcon from './icons/IconVolume.vue';
import RepetitionsIcon from './icons/IconRepetitions.vue';
import DumbbellIcon from './icons/IconDumbbell.vue';
import MedalIcon from './icons/IconMedal.vue';

// Four different icons
const icons = [VolumeIcon, RepetitionsIcon, DumbbellIcon, MedalIcon];

// Customize each stat icon, opacity, data and label
const props = defineProps({
  id: Number,
  opacity: Number,
  data: String,
  label: String
});

// Computed style opacity
const style = computed(() => `background-color: rgba(53, 185, 211, ${props.opacity})`);
</script>

<template>
  <div class="d-flex">
    <div class="icon d-flex me-3" :style="style">
      <component :is="icons[id]"></component>
    </div>
    <div>
      <p class="mb-1"><b>{{ data }}</b></p>
      <p>{{ label }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.icon {
  border-radius: 100%;
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
