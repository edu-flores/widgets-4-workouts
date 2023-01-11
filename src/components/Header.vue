<script setup>
import ScaleIcon from './icons/IconScale.vue';
import CalendarIcon from './icons/IconCalendar.vue';
import MoonIcon from './icons/IconMoon.vue';
</script>

<template>
  <header>
    <div>
      <ScaleIcon />
      <span>75.2 kg</span>
    </div>
    <div>
      <CalendarIcon />
      <span><b>Monday</b>: January 9, 2023</span>
    </div>
    <div>
      <span>Light</span>
      <MoonIcon />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

header {
  background-color: white;
  border: 1px solid $lighter;
  border-radius: 6px;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  div {
    display: flex;
    gap: 1rem;
  }
}
</style>
