<script setup>
import Stat from '../Stat.vue';

// Volume, reps, exercises and best 1RM badges style and data
const stats = [
  {
    id: 0,
    opacity: 1,
    data: '1,346 lbs',
    label: 'Total Volume'
  },
  {
    id: 1,
    opacity: 0.75,
    data: '129',
    label: 'Repetitions'
  },
  {
    id: 2,
    opacity: 0.5,
    data: '7',
    label: 'Exercises'
  },
  {
    id: 3,
    opacity: 0.25,
    data: '225 lbs',
    label: 'Best 1RM'
  }
];
</script>

<template>
  <section>
    <div class="mb-3">
      <h6><b>Statistics</b></h6>
    </div>
    <div class="container-fluid">
      <div class="row gy-3">
        <div class="col-12 col-sm-6 col-lg-3" v-for="stat in stats" :key="stat.id">
          <Stat :id="stat.id" :opacity="stat.opacity" :data="stat.data" :label="stat.label" />
        </div>
      </div>
    </div>
  </section>
</template>
