<script setup>
// Vue API
import { ref } from 'vue';

// Header & Footer
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// Widgets
import Statistics from './components/widgets/Statistics.vue';
import PlateCalculator from './components/widgets/PlateCalculator.vue';
import Music from './components/widgets/Music.vue';
import WarmupDropset from './components/widgets/WarmupDropset.vue';
import Timer from './components/widgets/Timer.vue';
import Log from './components/widgets/Log.vue';
import Notes from './components/widgets/Notes.vue';
import Analysis from './components/widgets/Analysis.vue';
import Goals from './components/widgets/Goals.vue';

// Exercises for Log component
const exercises = ref([
  {
    name: 'Bench Press',
    sets: [
      {
        weight: 0,
        reps: 0,
        done: false
      }
    ]
  }
]);

// Push a set to an exercise
const addSet = exercise => {
  exercises.value[exercise].sets.push({
    weight: 0,
    reps: 0,
    done: false
  });
}

// Remove set from an exercise
const removeSet = (exercise, set) => exercises.value[exercise].sets.splice(set, 1);

// Push an exercise to the main array
const addExercise = () => {
  exercises.value.push({
    name: 'New Exercise',
    sets: [
      {
        weight: 0,
        reps: 0,
        done: false
      }
    ]
  });
}

// Remove an exercise from the main array
const removeExercise = exercise => exercises.value.splice(exercise, 1);

// Available goals
const goals = [
  {
    id: 0,
    name: 'Repetitions',
    progress: 0,
    limit: 100,
    units: 'reps',
    active: true
  },
  {
    id: 1,
    name: 'Number of Sets',
    progress: 0,
    limit: 15,
    units: 'sets',
    active: true
  },
  {
    id: 2,
    name: 'Exercises',
    progress: 0,
    limit: 5,
    units: 'exercises',
    active: true
  },
  {
    id: 3,
    name: 'Total Volume',
    progress: 0,
    limit: 1000,
    units: 'lbs',
    active: true
  }
];
</script>

<template>
  <div id="main-container">
    <!-- Header -->
    <Header />
    <main class="container-fluid py-4 px-0">
      <div class="row gy-4">
        <!-- Statistics -->
        <div class="col-12 col-md-8">
          <Statistics
            class="widget"
            :exercises="exercises"
          />
        </div>
        <!-- Plate Calculator -->
        <div class="col-12 col-md-4">
          <PlateCalculator class="widget" />
        </div>
        <div class="col-12 col-lg-4">
          <div class="row gy-4">
            <!-- Music -->
            <div class="col-12 col-md-6 col-lg-12">
              <Music style="height: 152px;" />
            </div>
            <!-- Warmup & Dropset Calculator -->
            <div class="col-12 col-sm-6 col-md-3 col-lg-6">
              <WarmupDropset class="widget" />
            </div>
            <!-- Timer -->
            <div class="col-12 col-sm-6 col-md-3 col-lg-6">
              <Timer class="widget" />
            </div>
          </div>
        </div>
        <!-- Log -->
        <div class="col-12 col-md-8 col-lg-6">
          <Log 
            class="widget"
            :exercises="exercises"
            @add-set="addSet"
            @remove-set="removeSet"
            @add-exercise="addExercise"
            @remove-exercise="removeExercise"
          />
        </div>
        <!-- Notes -->
        <div class="col-12 col-md-4 col-lg-2">
          <Notes class="widget" />
        </div>
        <!-- Analysis -->
        <div class="col-12 col-lg-8">
          <Analysis class="widget" />
        </div>
        <!-- Goals -->
        <div class="col-12 col-lg-4">
          <Goals
            class="widget"
            :goals="goals"
          />
        </div>
      </div>
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import './assets/main.scss';

#main-container {
  max-width: 80rem;
  margin: auto;
}

.widget {
  background-color: white;
  border: 1px solid $lighter;
  border-radius: 6px;
  padding: 1.5rem 2rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  height: 100%;
}
</style>
