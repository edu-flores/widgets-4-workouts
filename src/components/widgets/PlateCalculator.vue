<script setup>
// Vue API
import { ref } from 'vue';

// Components
import WeightPlate from '../WeightPlate.vue';

// Data
let n = ref(185);

// Validate and resize input while typing
const input = ref(null);
const handleInput = event => {
  // Validate
  if (event.target.value < 0 || !event.target.value)
    n.value = 0;
  else if (event.target.value > 995)
    n.value = 995;

  // Resize
  input.value.style.width = (input.value.value.length || 1) + 'ch';
}

// Look for a plate calculation solution (greedy algorithm)
const availablePlates = [45, 35, 25, 10, 5, 2.5];
const calculatePlates = goalWeight => {
  let currentWeight = 0;
  let ans = [];

  goalWeight -= 45;  // Subtract barbell weight
  let i = 0;
  while (currentWeight < goalWeight) {
    let plate = availablePlates[i];

    // Try to add heaviest available plate
    if (currentWeight + (plate * 2) <= goalWeight) {
      ans.push(plate);
      currentWeight += plate * 2;
    } else i++;

    // Prevent infinite loop
    if (i === availablePlates.length) break;
  }

  return ans;
}
</script>

<template>
  <section>
    <!-- Title -->
    <div class="mb-auto">
      <h6><b>Plate Calculator</b></h6>
    </div>
    <!-- Content -->
    <div class="container-fluid mb-auto">
      <div class="row mt-1 gy-3 align-items-center justify-content-between">
        <!-- No Extra Weight Needed -->
        <div v-if="n < 50" class="plates col-12 col-sm-6 col-md-12 col-lg-6">
          <span>No weight needed.</span>
        </div>
        <!-- Visual Representation -->
        <div v-else class="plates col-12 col-sm-6 col-md-12 col-lg-6">
          <div v-for="(plate, i) in calculatePlates(n)" :key="i">
            <WeightPlate :weight="plate" />
          </div>
        </div>
        <!-- Text -->
        <div class="col-12 col-sm-6 col-md-12 col-lg-6 text-center">
          <p class="mb-0">
            <b><input class="text-end" @input="handleInput" ref="input" type="number" min="0" max="995" step="5" v-model="n" /> lbs</b>
          </p>
          <span>{{ calculatePlates(n).reduce((a, b) => a + b, 0) }} lbs per side</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.plates {
  @include flexbox(row, center, center, 1px);
  height: 4rem;
}

p {
  color: $darker;
  font-size: 1.6rem;
}

input {
  all: unset;
  width: 3ch;
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
</style>
