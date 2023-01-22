<script setup>
// Icons
import MinusIcon from '../icons/IconMinus.vue';
import DeleteIcon from '../icons/IconDelete.vue';
import FilledCheckIcon from '../icons/IconFilledCheck.vue';
import EmptyCheckIcon from '../icons/IconEmptyCheck.vue';

// Components
import Empty from '../Empty.vue';

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
      <div class="container-fluid">
        <div :class="index !== 0 ? 'mt-4' : ''" v-for="(exercise, index) in exercises" :key="index">
          <div class="d-flex justify-content-between mb-2">
            <!-- Name -->
            <input class="name text-input" type="text" maxlength="15" v-model="exercise.name" />
            <!-- Delete -->
            <MinusIcon @click="$emit('removeExercise', index)" />
          </div>
          <hr>
          <!-- Exercie Table -->
          <table class="w-100 text-center mb-2">
            <thead>
              <tr>
                <th class="w-25">SET</th>
                <th class="w-25">WEIGHT</th>
                <th class="w-25">REPS</th>
                <th class="w-25">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(set, i) in exercise.sets" :key="i">
                <td class="w-25">{{ i+1 }}</td>
                <td class="w-25">
                  <input class="set-input text-end" type="number" min="5" max="995" step="5" v-model="set.weight" />
                  <span>&nbsp;lbs</span>
                </td>
                <td class="w-25">
                  <input class="set-input" type="number" min="1" max="20" v-model="set.reps" />
                </td>
                <td class="d-flex justify-content-center m-auto w-25">
                  <label class="me-1">
                    <input type="checkbox" v-model="set.done" />
                    <div v-if="set.done"><FilledCheckIcon /></div>
                    <div v-else><EmptyCheckIcon /></div>
                  </label>
                  <div class="ms-1">
                    <DeleteIcon @click="$emit('removeSet', index, i)" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- New Set & Exercise -->
          <button v-if="exercise.sets.length < 10" @click="$emit('addSet', index)" type="button" class="add-set w-100">+ Add Set</button>
        </div>
        <!-- No Exercises Yet -->
        <Empty v-if="exercises.length === 0" message="There are no exercises yet." height="12rem" />
        <!-- Add Exercise -->
        <button v-if="exercises.length < 10" @click="$emit('addExercise')" type="button" class="add-exercise w-100">+ Add Exercise</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.container-overflow {
  height: 16.5rem;
  overflow-y: auto;
}

.name {
  color: $darker;
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
