<script setup>
// Vue API
import { ref } from 'vue';

// Data
let n = 185;

// Resize input while typing
const input = ref(null);
const resize = () => input.value.style.width = input.value.value.length + 'ch';
</script>

<template>
  <section>
    <!-- Title -->
    <div>
      <h6><b>Plate Calculator</b></h6>
    </div>
    <!-- Content -->
    <div class="container-fluis">
      <div class="row align-items-center justify-content-between">
        <!-- Visual Representation -->
        <div id="barbell" class="col-12 col-sm-6 col-md-12 col-lg-6">
          <div id="inner-bar"></div>
          <div id="separation"></div>
          <div id="outer-bar"></div>
        </div>
        <!-- Text -->
        <div class="col-12 col-sm-6 col-md-12 col-lg-6 text-center">
          <p class="mb-0">
            <b><input class="text-end" @input="resize" ref="input" type="number" min="0" max="995" step="5" v-model="n" /> lbs</b>
          </p>
          <span>= 70 on each side</span>
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
</style>
