<script setup>
// Icons
import StopwatchIcon from '../icons/IconStopwatch.vue';
import FilledCheckIcon from '../icons/IconFilledCheck.vue';
import EmptyCheckIcon from '../icons/IconEmptyCheck.vue';

// Props
const props = defineProps({
  exercises: Array
});

// Events
const emits = defineEmits(['addSet', 'removeSet', 'addExercise', 'removeExercise']);
</script>

<template>
  <section>
    <div class="container-overflow">
      <!-- Title -->
      <div class="mb-3">
        <h6><b>Log</b></h6>
      </div>
      <!-- Content -->
      <div :class="index !== 0 ? 'mt-4' : ''" v-for="(exercise, index) in exercises" :key="index">
        <div class="d-flex justify-content-between mb-2">
          <!-- Name -->
          <input class="text-input" type="text" v-model="exercise.name" />
          <!-- Timer -->
          <div>
            <input class="timer-input text-end" type="number" min="0" max="59" v-model="exercise.timer.minutes" />
            <span style="width: 2px;">:</span>
            <input class="timer-input" type="number" min="0" max="59" v-model="exercise.timer.seconds" />
            <StopwatchIcon class="ms-1 mb-1" />
          </div>
        </div>
        <hr>
        <!-- Exercie Table -->
        <table class="w-100 text-center">
          <thead>
            <tr>
              <th class="w-25">SET</th>
              <th class="w-25">WEIGHT</th>
              <th class="w-25">REPS</th>
              <th class="w-25">DONE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(set, i) in exercise.sets" :key="i">
              <td class="w-25">{{ i+1 }}</td>
              <td class="w-25">
                <input class="set-input text-end" type="number" min="1" max="999" v-model="set.weight" />
                <span>&nbsp;lbs</span>
              </td>
              <td class="w-25">
                <input class="set-input" type="number" min="1" max="20" v-model="set.reps" />
              </td>
              <td class="w-25" @click="set.done = !set.done">
                <div v-if="set.done"><FilledCheckIcon /></div>
                <div v-else><EmptyCheckIcon /></div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- New Set & Exercise -->
        <button @click="$emit('addSet', index)" type="button" class="add-set w-100">+ Add Set</button>
      </div>
      <button @click="$emit('addExercise')" type="button" class="add-exercise w-100">+ Add Exercise</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.container-overflow {
  height: 16.5rem;
  overflow-y: auto;
}

span {
  color: $darker;
}

@media #{map-get($queries, sm)} {
  .log {
    padding-right: 2rem;
  }
}

th {
  font-weight: 100;
  padding-bottom: 0.5rem;
}

td {
  padding: 0.2rem;
}

button {
  margin-top: 0.5rem;
  border: 0;
  border-radius: 5px;
  padding: 0.2rem 0;
  font-size: small;

  &:active {
    transform: translateY(1px);
    filter: brightness(0.8);
  }
}

.add-set {
  background-color: $lighter;
  color: $darker;
}

.add-exercise {
  background-color: $darker;
  color: $lighter;
}

input {
  all: unset;
}

.text-input {
  font-weight: bold;
  width: 10rem;
}

.timer-input {
  width: 1.5rem;
}

.set-input {
  width: 2rem;
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

::-webkit-scrollbar {
  display: none;
}
</style>
