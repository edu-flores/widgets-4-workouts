<script setup>
import MenuIcon from '../icons/IconMenu.vue';
import PlayIcon from '../icons/IconPlay.vue';
import PauseIcon from '../icons/IconPause.vue';
import StopIcon from '../icons/IconStop.vue';
</script>

<template>
  <section class="text-center">
    <div class="menu text-end">
      <MenuIcon />
    </div>
    <p><b>02:36</b></p>
    <progress class="w-100" value="62" max="100"></progress>
    <div class="timer--icons d-flex mt-2">
      <PauseIcon />
      <StopIcon />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.menu {
  margin-top: -1.5rem;
  margin-right: -1rem;
}

p {
  color: $darker;
  font-size: 1.6rem;
  margin-bottom: -0.5rem;
}

progress {
  border-radius: 10px;
  height: 9px;
}
progress::-webkit-progress-bar {
  background-color: $light;
  border-radius: 10px;
}
progress::-webkit-progress-value {
  background-color: $primary;
  border-radius: 10px;
}
progress::-moz-progress-bar {
  background-color: $primary;
  border-radius: 10px;
}

.timer--icons {
  justify-content: center;
  gap: 1.2rem;
}
</style>
