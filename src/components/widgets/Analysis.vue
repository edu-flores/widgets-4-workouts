<script setup>
// Vue API
import { watch, ref } from 'vue';

// Components
import ExerciseAnalysis from '../ExerciseAnalysis.vue';
import Empty from '../Empty.vue';

// Donut chart - Volume per exercise
const donutOptions = ref({
  labels: ['Empty'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '65%',
        labels: {
          show: true,
          name: {
            fontSize: '14px',
            fontFamily: 'Inter'
          },
          value: {
            fontSize: '18px',
            fontFamily: 'Inter',
            formatter: val => Math.round(val).toLocaleString('en-US') + ' lbs'
          }
        }
      }
    }
  },
  fill: {
    colors: ['#35b9d3', '#4e4a55']
  },
  colors: ['#35b9d3', '#4e4a55'],
  tooltip: {
    enabled: false
  }
});
let donutSeries = ref([0.1]);

// Props
const props = defineProps({
  exercises: Array
});

// Calculations
const calculateVolume = exercise => {  // Vol
  return exercise.sets.reduce((volume, set) => {
    return volume + (set.done ? (set.weight || 0) * (set.reps || 0) : 0);
  }, 0);
}
const calculateSets = exercise => {  // Sets
  return exercise.sets.reduce((setCount, set) => {
    return setCount + (set.done ? 1 : 0);
  }, 0);
}
const calculateReps = exercise => {  // Reps
  return exercise.sets.reduce((reps, set) => {
    return reps + (set.done ? (set.reps || 0) : 0);
  }, 0);
}
const calculateORM = exercise => {  // 1RM
  return parseInt(Math.max.call(Math, ...exercise.sets.map(set => {
    return (set.done ? (set.weight || 0) / (1.0278 - 0.0278 * (set.reps || 0)) : 0);
  })));
}

// Update chart
watch(
  props.exercises,
  () => {
    // Clear chart
    donutOptions.value.labels.splice(0, donutOptions.value.labels.length);
    donutSeries.value.splice(0, donutSeries.value.length);

    // Push new data to the chart
    donutOptions.value.labels.splice(0, donutOptions.value.labels.length);
    donutSeries.value.splice(0, donutSeries.value.length);
    props.exercises.forEach(exercise => {
      donutOptions.value.labels.push(exercise.name);
      donutSeries.value.push(calculateVolume(exercise));
    });

    // No volume yet
    if (donutSeries.value.reduce((a, b) => a + b, 0) === 0) {
      donutOptions.value.labels.splice(0, donutOptions.value.labels.length);
      donutSeries.value.splice(0, donutSeries.value.length);
      donutOptions.value.labels.push('Empty');
      donutSeries.value.push(0.1);
      return;
    }
  }
);
</script>

<template>
  <section>
    <!-- Title -->
    <div class="mb-auto">
      <h6><b>Analysis</b></h6>
    </div>
    <!-- Content -->
    <div class="container-fluid mb-auto">
      <div class="row gy-3 align-items-center">
        <!-- Donut Chart -->
        <div class="col-12 col-lg-4 d-flex justify-content-center">
          <apexchart width="250" type="donut" :options="donutOptions" :series="donutSeries"></apexchart>
        </div>
        <div class="col-12 col-lg-8">
          <div class="exercises row gy-1 justify-content-center border-start border-end">
            <!-- Exercise Highlights -->
            <div
              class="col-12 col-sm-6 col-md-4"
              v-for="exercise in exercises" :key="exercise.name"
            >
              <ExerciseAnalysis
                :name="exercise.name"
                :volume="calculateVolume(exercise)"
                :sets="calculateSets(exercise)"
                :reps="calculateReps(exercise)"
                :orm="calculateORM(exercise)"
              />
            </div>
            <!-- No Exercises Yet -->
            <Empty v-if="exercises.length === 0" message="No data to analyze." height="10rem" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.exercises {
  height: 10rem;
  overflow-y: auto;
}

::-webkit-scrollbar {
  display: none;
}
</style>
