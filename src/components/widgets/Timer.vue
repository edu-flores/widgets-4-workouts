<script setup>
// Vue API
import { ref, watch } from 'vue';

// Notification sound
import notification from '../../sounds/timer-end.wav';

// Icons
import PlayIcon from '../icons/IconPlay.vue';
import PauseIcon from '../icons/IconPause.vue';
import StopIcon from '../icons/IconStop.vue';

// Data
const timer = ref({ minutes: '02', seconds: '30' });
let playing = ref(false);
let started = false;
let progressNow = 150;
let progressMax = 150;

// Add zeroes when necessary and handle progress bar
watch(
  timer.value,
  () => {
    // Validate (max: 59)
    if (String(timer.value.minutes).length > 2)
      timer.value.minutes = '59';
    if (String(timer.value.seconds).length > 2)
      timer.value.seconds = '59';
    // Validate (min: 00)
    if (String(timer.value.minutes).includes('-') || !String(timer.value.minutes))
      timer.value.minutes = '00';
    if (String(timer.value.seconds).includes('-') || !String(timer.value.seconds))
      timer.value.seconds = '00';

    // Zeroes
    if (String(timer.value.minutes).length === 1)
      timer.value.minutes = '0' + timer.value.minutes;
    if (String(timer.value.seconds).length === 1)
      timer.value.seconds = '0' + timer.value.seconds;

    // Progress bar
    if (!playing.value)
      progressMax = parseInt(timer.value.minutes * 60) + parseInt(timer.value.seconds);
    progressNow = parseInt(timer.value.minutes * 60) + parseInt(timer.value.seconds);
  }
);

// Start or stop timer
let initial;
let interval;
const togglePlay = () => {
  // First time starting the timer
  if (!started) {
    started = true;
    initial = {...timer.value};
  }

  // Play or pause
  if (!playing.value) {
    // Start countdown
    interval = setInterval(() => {
      if (parseInt(timer.value.seconds) - 1 < 0) {  // Minutes change
        timer.value.minutes -= 1;
        timer.value.seconds = 59;
      } else {  // Seconds change
        timer.value.seconds -= 1;

        // Countdown finish
        if (timer.value.minutes === '00' && timer.value.seconds === 0) {
          clearInterval(interval);
          playing.value = false;
          started = false;
          timer.value.minutes = initial.minutes;
          timer.value.seconds = initial.seconds;
          
          // Notification
          const audio = new Audio(notification);
          audio.play();
        }
      }
    }, 1000);
  } else clearInterval(interval);

  // Toggle
  playing.value = !playing.value;
}

// Reset timer to initial data
const resetTimer = () => {
  // Clear values
  clearInterval(interval);
  started = false;
  playing.value = false;

  // Reset values
  if (initial) {
    timer.value.minutes = initial.minutes;
    timer.value.seconds = initial.seconds;
    progressNow = parseInt(timer.value.minutes * 60) + parseInt(timer.value.seconds);
    progressMax = parseInt(timer.value.minutes * 60) + parseInt(timer.value.seconds);
    initial = null;
  }
}
</script>

<template>
  <section class="text-center">
    <!-- Timer Countdown -->
    <p>
      <b>
        <input type="number" min="0" max="59" v-model="timer.minutes" :disabled="started" />
        <span>:</span>
        <input type="number" min="0" max="59" v-model="timer.seconds" :disabled="started" />
      </b>
    </p>
    <progress class="mt-2 w-100" :value="progressNow || 1" :max="progressMax || 1"></progress>
    <!-- Timer Controls -->
    <div class="icons d-flex mt-2">
      <div @click="togglePlay">
        <PlayIcon v-if="!playing" />
        <PauseIcon v-else />
      </div>
      <StopIcon @click="resetTimer" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

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
