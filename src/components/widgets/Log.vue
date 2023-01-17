<script setup>
// Icons
import StopwatchIcon from '../icons/IconStopwatch.vue';
import FilledCheckIcon from '../icons/IconFilledCheck.vue';
import EmptyCheckIcon from '../icons/IconEmptyCheck.vue';

// Utils
import { formatSeconds } from '../../utils/utils';

// Components
import Modal from '../Modal.vue';

// Props
const props = defineProps({
  exercises: Array
});

// Events
const emits = defineEmits(['toggleSet', 'addSet', 'addExercise']);
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
        <div class="mb-2">
          <span><b>{{ exercise.name }}</b></span>
          <StopwatchIcon class="ms-3 mb-1" /> {{ formatSeconds(exercise.timer) }}
        </div>
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
              <td class="w-25">{{ set.weight }} lbs</td>
              <td class="w-25">{{ set.reps }}</td>
              <td class="w-25" @click="$emit('toggleSet', index, i)">
                <div v-if="set.done">
                  <FilledCheckIcon />
                </div>
                <div v-else>
                  <EmptyCheckIcon />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- New Set & Exercise -->
        <button @click="$emit('addSet', index)" type="button" class="add-set w-100">+ Add Set</button>
      </div>
      <button @click="$emit('addExercise')" type="button" class="add-exercise w-100">+ Add Exercise</button>
    </div>
    <!-- Modals -->
    <Modal v-if="false">
      
    </Modal>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.container-overflow {
  height: 16rem;
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
</style>
