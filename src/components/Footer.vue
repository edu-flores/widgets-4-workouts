<script setup>
// Vue API
import { ref } from 'vue';

// Icons
import ResetIcon from './icons/IconReset.vue';
import ExportIcon from './icons/IconExport.vue';
import HelpIcon from './icons/IconHelp.vue';

// Components
import Modal from './Modal.vue';

// Props
const props = defineProps({
  exercises: Array
});

// Reload whole page
const reset = () => window.location.reload();

// Export widget data to a file
const exportData = () => {
  // Save exercises sets and reps
  let saveFile = '';
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
</script>

<template>
  <footer class="container-fluid">
    <div class="row align-items-center py-4 py-sm-2 px-4 gy-3 gy-sm-0">
      <!-- Component cleanup -->
      <div class="col-6 text-end" @click="showReset = true">
        <ResetIcon class="me-2 mb-1" />
        <span>Reset</span>
      </div>
      <!-- Download Results -->
      <div class="col-6 col-sm-4" @click="exportData">
        <span>Export</span>
        <ExportIcon class="ms-2 mb-1" />
      </div>
      <!-- Help / About -->
      <div class="col-12 col-sm-2 text-center text-sm-end">
        <HelpIcon />
      </div>
    </div>
  </footer>
  <!-- Modals -->
  <Modal v-if="showReset">
    <div class="reset text-center">
      <h5><b>Are you sure you want to <br> reset all the widgets?</b></h5>
      <div class="mt-4">
        <button class="me-2" @click="showReset = false">No</button>
        <button class="ms-2" @click="reset">Yes</button>
      </div>
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

.row {
  min-height: inherit;
}

.reset {
  @include flexbox(column, center, center);
  width: 20rem;
  height: 10rem;

  h5 {
   color: $darker; 
  }

  button {
    margin-top: 0.5rem;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 2rem;

    &:active {
      transform: translateY(1px);
      filter: brightness(0.8);
    }
  }
}
</style>
