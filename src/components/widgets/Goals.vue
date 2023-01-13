<script setup>
import PlusIcon from '../icons/IconPlus.vue';
</script>

<template>
  <section>
    <div class="mb-4">
      <h6><b>Goals</b></h6>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-12">
          <p class="goal"><b>Total Volume</b></p>
          <progress class="w-100" value="32" max="100"></progress>
          <div class="text-end">
            <span>2,134 / 3,000 lbs</span>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-12">
          <p class="goal"><b>Repetitions</b></p>
          <progress class="w-100" value="62" max="100"></progress>
          <div class="text-end">
            <span>123 / 180 reps</span>
          </div>
        </div>
      </div>
    </div>
    <div class="add mt-3">
      <PlusIcon />
      <span>New Goal</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

p {
  color: $darker;
  font-size: medium;
  margin-bottom: -0.2rem;
}

span {
  font-size: small;
}

.add {
  @include flexbox(column, center, center);
  gap: 0.5rem;
}
</style>
