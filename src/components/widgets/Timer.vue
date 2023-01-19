<script setup>
// Vue API
import { ref, watch } from 'vue';

// Notification sound
import notification from '../../sounds/timer-end.wav';

// Icons
import MenuIcon from '../icons/IconMenu.vue';
import PlayIcon from '../icons/IconPlay.vue';
import PauseIcon from '../icons/IconPause.vue';
import StopIcon from '../icons/IconStop.vue';

// Data
const timer = ref({ minutes: '02', seconds: '30' });
let isPlaying = ref(false);
let totalSecs = 150;

// Add zeroes when necessary and count total seconds
watch(
  timer.value,
  () => {
    if (String(timer.value.minutes).length === 1) 
      timer.value.minutes = '0' + timer.value.minutes;
    if (String(timer.value.seconds).length === 1) 
      timer.value.seconds = '0' + timer.value.seconds;

    totalSecs = parseInt(timer.value.minutes * 60) + parseInt(timer.value.seconds);
  }
);

// Start or stop timer
let interval;
const togglePlay = () => {
  if (!isPlaying.value) {
    // Start countdown
    interval = setInterval(() => {
      if (parseInt(timer.value.seconds) - 1 < 0) {  // Minutes change
        timer.value.minutes -= 1;
        timer.value.seconds = 59;
      } else {  // Seconds change
        timer.value.seconds -= 1;
        if (timer.value.minutes === '00' && timer.value.seconds === 0) {
          clearInterval(interval);
          isPlaying.value = false;
          const audio = new Audio(notification);
          audio.play();
        }
      }
    }, 1000);
  } else clearInterval(interval);

  // Toggle
  isPlaying.value = !isPlaying.value;
}
</script>

<template>
  <section class="text-center">
    <!-- Menu -->
    <div class="menu text-end">
      <MenuIcon />
    </div>
    <!-- Timer Countdown -->
    <p>
      <b>
        <input type="number" min="0" max="59" v-model="timer.minutes" />
        <span>:</span>
        <input type="number" min="0" max="59" v-model="timer.seconds" />
      </b>
    </p>
    <progress class="w-100" :value="totalSecs" :max="150"></progress>
    <!-- Timer Controls -->
    <div class="icons d-flex mt-2">
      <div @click="togglePlay">
        <PlayIcon v-if="!isPlaying" />
        <PauseIcon v-else />
      </div>
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

input {
  all: unset;
  width: 2ch;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.icons {
  justify-content: center;
  gap: 1.2rem;
}
</style>
