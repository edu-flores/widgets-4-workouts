<script setup>
// Vue API
import { ref } from 'vue';

// Icons
import ScaleIcon from './icons/IconScale.vue';
import CalendarIcon from './icons/IconCalendar.vue';
import SettingsIcon from './icons/IconSettings.vue';

// Components
import Modal from './Modal.vue';

// Date days and months
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Data
let showSettings = ref(false);
let weight = ref(78.2);
let date = ref(new Date());

// Show modal and set inputs
let newWeight = ref(weight.value);
let newDate = ref(date.value.toISOString().substring(0, 10));
const openModal = () => {
  newWeight.value = weight.value;
  newDate.value = date.value.toISOString().substring(0, 10);
  showSettings.value = true;
}

// Save weight and date from settings
const saveSettings = () => {
  weight.value = newWeight.value;
  date.value = new Date(newDate.value);
  showSettings.value = false;
}

// Validate weight input (min: 0, max: 200)
const validate = event => {
  if (event.target.value < 0)
    newWeight.value = 0;
  else if (event.target.value > 200)
    newWeight.value = 200;
}
</script>

<template>
  <header class="container-fluid">
    <div class="row align-items-center py-4 py-md-2 px-4 gy-3 gy-md-0">
      <!-- Personal Weight -->
      <div class="order-2 col-6 col-md-3 text-start">
        <ScaleIcon class="me-2 mb-1" />
        <span>{{ parseFloat(weight).toFixed(2) }} kgs</span>
      </div>
      <!-- Date -->
      <div class="order-1 order-md-2 col-12 col-md-6 text-center">
        <CalendarIcon class="me-2 mb-1" />
        <span><b>{{ days[date.getUTCDay()] }}</b>: {{ months[date.getUTCMonth()] }} {{ date.getUTCDate() }}, {{ date.getUTCFullYear() }}</span>
      </div>
      <!-- Settings -->
      <div class="order-3 col-6 col-md-3 text-end" @click="openModal">
        <span class="cursor">Settings</span>
        <SettingsIcon class="ms-2 mb-1" />
      </div>
    </div>
  </header>
  <!-- Modals -->
  <Modal v-if="showSettings">
    <div class="settings text-center">
      <form>
        <!-- Weight -->
        <label class="mb-1" for="weight"><b>Weight (kgs):</b></label>
        <input @input="validate" class="mb-3" id="weight" type="number" min="0" max="200" step="0.1" placeholder="0.00" v-model="newWeight" />
        <!-- Date -->
        <label class="mb-1" for="date"><b>Date:</b></label>
        <input id="date" type="date" v-model="newDate" />
      </form>
      <div class="mt-4">
        <button class="back me-4" @click="showSettings = false">Back</button>
        <button class="save ms-4" @click="saveSettings" :disabled="!newWeight || !newDate">Save</button>
      </div>
    </div>
  </Modal>
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

.cursor {
  cursor: pointer;
}

input {
  all: unset;
  border: 1px solid $light;
  border-radius: 6px;
  padding: 0.5rem;
  width: 85%;
}

.row {
  min-height: inherit;
}

b {
  color: $darker;
}

.settings {
  @include flexbox(column, center, center);
  width: 20rem;
  max-width: 70vw;

  button {
    margin-top: 0.5rem;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 2rem;

    &:disabled {
      filter: brightness(0.5);
    }

    &:enabled:active {
      filter: brightness(0.8);
    }
  }

  .save {
    background-color: $darker;
    color: $lighter;
  }
}

</style>
