<script setup>
// Vue API
import { ref } from 'vue';

// Icons
import ResetIcon from './icons/IconReset.vue';
import ExportIcon from './icons/IconExport.vue';
import HelpIcon from './icons/IconHelp.vue';
import HeartIcon from './icons/IconHeart.vue';
import LinkIcon from './icons/IconLink.vue';

// Components
import Modal from './Modal.vue';

// Props
const props = defineProps({
  exercises: Array,
  weight: Number,
  date: Date
});

// Reload whole page
const reset = () => window.location.reload();

// Export widget data to a file
const exportData = () => {
  // Save exercises sets and reps
  let saveFile = String('@' + props.weight + ' kg') + ' ' + String(props.date.toISOString().substring(0, 10)) + '\n\n';
  props.exercises.forEach(exercise => {
    saveFile += exercise.name + '\n';
    exercise.sets.forEach(set => {
      if (set.done)
        saveFile += (set.weight + ' lbs') + (' x ' + set.reps + ' reps') + '\n';
    });
    saveFile += '\n';
  });

  // Download file via anchor
  const blob = new Blob([saveFile], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.download = `${'Workout'}.txt`;
  anchor.href = url;
  anchor.click();
}

// Data
let showReset = ref(false);
let showHelp = ref(false);
</script>

<template>
  <footer class="container-fluid">
    <div class="row align-items-center py-4 py-sm-2 px-4 gy-3 gy-sm-0">
      <!-- Component cleanup -->
      <div class="col-6 text-end" @click="showReset = true">
        <ResetIcon class="me-2 mb-1" />
        <span class="cursor">Reset</span>
      </div>
      <!-- Download Results -->
      <div class="col-6 col-sm-4" @click="exportData">
        <span class="cursor">Export</span>
        <ExportIcon class="ms-2 mb-1" />
      </div>
      <!-- Help / About -->
      <div class="col-12 col-sm-2 text-center text-sm-end" @click="showHelp = true">
        <HelpIcon />
      </div>
    </div>
  </footer>
  <!-- Modals -->
  <Modal v-if="showReset">
    <!-- Reset Page -->
    <div class="reset text-center">
      <h5>Are you sure you want to <br> reset all the widgets?</h5>
      <div class="mt-4">
        <button class="decline me-4" @click="showReset = false">No</button>
        <button class="accept ms-4" @click="reset">Yes</button>
      </div>
    </div>
  </Modal>
  <Modal v-if="showHelp">
    <!-- Help -->
    <div class="help">
      <h5 class="mb-4">About</h5>
      <p>
        <i><b>Widgets 4 Workouts</b></i> is a training helper that lets you log your daily workouts, while providing useful information about the way you train.
      </p>
      <span class="text-center">Made with <HeartIcon /> <br> by <a href="https://edu-flores.github.io/" target="_blank">Eduardo Flores</a> <LinkIcon /></span>
      <button class="mt-4" @click="showHelp = false">Close</button>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

footer {
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

.row {
  min-height: inherit;
}

.reset {
  @include flexbox(column, center, center);
  width: 20rem;
  max-width: 70vw;

  h5 {
   color: $darker;
  }

  button {
    margin-top: 0.5rem;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 2rem;

    &:active {
      filter: brightness(0.8);
    }
  }

  .accept {
    background-color: $darker;
    color: $lighter;
  }
}

.help {
  @include flexbox(column, center, center);
  width: 30rem;
  max-width: 70vw;

  h5 {
    color: $darker;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: currentColor;
  }

  button {
    margin-top: 0.5rem;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 2rem;

    &:active {
      filter: brightness(0.8);
    }
  }
}
</style>
