<script setup>
// Icons
import ScaleIcon from './icons/IconScale.vue';
import CalendarIcon from './icons/IconCalendar.vue';
import MoonIcon from './icons/IconMoon.vue';

// Data
const today = new Date();
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
</script>

<template>
  <header class="container-fluid">
    <div class="row align-items-center py-4 py-md-2 px-4 gy-3 gy-md-0">
      <!-- Personal Weight -->
      <div class="order-2 col-6 col-md-3 text-start">
        <ScaleIcon class="me-2 mb-1" />
        <span>75.2 kg</span>
      </div>
      <!-- Date -->
      <div class="order-1 order-md-2 col-12 col-md-6 text-center">
        <CalendarIcon class="me-2 mb-1" />
        <span><b>{{ days[today.getDay()] }}</b>: {{ months[today.getMonth()] }} {{ today.getDay() }}, {{ today.getFullYear() }}</span>
      </div>
      <!-- Light & Dark Mode -->
      <div class="order-3 col-6 col-md-3 text-end">
        <span>Light</span>
        <MoonIcon class="ms-2 mb-1" />
      </div>
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
  min-height: 4rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}

.row {
  min-height: inherit;
}

b {
  color: $darker;
}
</style>
