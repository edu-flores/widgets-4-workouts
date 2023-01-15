<script setup>
// Icons
import MenuIcon from '../icons/IconMenu.vue';
import PlayIcon from '../icons/IconPlay.vue';
import PauseIcon from '../icons/IconPause.vue';
import StopIcon from '../icons/IconStop.vue';
</script>

<template>
  <section class="text-center">
    <!-- Menu -->
    <div class="menu text-end">
      <MenuIcon />
    </div>
    <!-- Timer Countdown -->
    <p><b>02:36</b></p>
    <progress class="w-100" value="62" max="100"></progress>
    <!-- Timer Controls -->
    <div class="icons d-flex mt-2">
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

.icons {
  justify-content: center;
  gap: 1.2rem;
}
</style>
