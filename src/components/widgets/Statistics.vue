<script setup>
// Vue API
import { ref, watch } from 'vue';

// Stat component
import Stat from '../Stat.vue';

// Utils
import { formatNumber } from '../../utils/utils';

// Props
const props = defineProps({
  exercises: Array
});

// Volume, reps, exercises and best 1RM badges style and data
const stats = ref([
  {
    id: 0,
    opacity: 1,
    data: '0 lbs',
    label: 'Total Volume'
  },
  {
    id: 1,
    opacity: 0.75,
    data: '0',
    label: 'Repetitions'
  },
  {
    id: 2,
    opacity: 0.5,
    data: '0',
    label: 'Exercises'
  },
  {
    id: 3,
    opacity: 0.25,
    data: '0 lbs',
    label: 'Best 1RM'
  }
]);

// Update stats when exercises changes
watch(
  props.exercises,
  () => {
    // Total volume
    const totalVolume = props.exercises.reduce((totalVolume, exercise) => {
      const exerciseVolume = exercise.sets.reduce((volume, set) => {
          return volume + (set.done ? set.weight * set.reps : 0);
      }, 0);
      return totalVolume + exerciseVolume;
    }, 0);
    stats.value[0].data = formatNumber(totalVolume) + ' lbs';

    // Repetitions
    const totalReps = props.exercises.reduce((totalReps, exercise) => {
      const exerciseReps = exercise.sets.reduce((reps, set) => {
        return reps + (set.done ? set.reps : 0);
      }, 0);
      return totalReps + exerciseReps;
    }, 0);
    stats.value[1].data = formatNumber(totalReps);

    // Exercises
    stats.value[2].data = String(props.exercises.length);

    // Best 1RM
    const ORM = parseInt(Math.max.apply(Math, ...props.exercises.map(exercise => {
      return exercise.sets.map(set => {
        return (set.done ? set.weight / (1.0278 - 0.0278 * set.reps) : 0);
      });
    })));
    stats.value[3].data = formatNumber(ORM || 0) + ' lbs';
  }
);
</script>

<template>
  <section>
    <!-- Title -->
    <div class="mb-3">
      <h6><b>Statistics</b></h6>
    </div>
    <!-- Content -->
    <div class="container-fluid">
      <div class="row gy-3">
        <div class="col-12 col-sm-6 col-lg-3" v-for="stat in stats" :key="stat.id">
          <Stat :id="stat.id" :opacity="stat.opacity" :data="stat.data" :label="stat.label" />
        </div>
      </div>
    </div>
  </section>
</template>
