<script setup>
// Vue API
import { ref } from 'vue';

// Data
let n = ref(225);

// Validate and resize input while typing
const input = ref(null);
const handleInput = event => {
  // Validate
  if (event.target.value < 0)
    n.value = 0;
  else if (event.target.value > 995)
    n.value = 995;

  // Resize
  input.value.style.width = (input.value.value.length || 1) + 'ch';
}
</script>

<template>
  <section class="text-center">
    <!-- Main Weight -->
    <p class="mb-0">
      <b><input class="text-end" @input="handleInput" ref="input" type="number" min="0" max="995" step="5" placeholder="0" v-model="n" /> lbs</b>
    </p>
    <!-- Derivations -->
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-6">
          <span><i>{{ Math.round((n*0.4)/5)*5 }} lbs</i></span>
        </div>
        <div class="col-6">
          <span><i>{{ Math.round((n*0.6)/5)*5 }} lbs</i></span>
        </div>
        <div class="col-12">
          <span><i>{{ Math.round((n*0.8)/5)*5 }} lbs</i></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

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

span {
  font-size: medium;
}
</style>
