<script setup>
// Icons
import PlusIcon from '../icons/IconPlus.vue';

// Components
import Goal from '../Goal.vue';
</script>

<template>
  <section>
    <!-- Title -->
    <div class="mb-4">
      <h6><b>Goals</b></h6>
    </div>
    <!-- Content -->
    <div class="container-fluid">
      <div class="row">
        <!-- Progress Bars -->
        <Goal
          name="Total Volume"
          :progress="1000"
          :limit="2000"
          units="lbs"
        />
      </div>
    </div>
    <!-- Edit Goals -->
    <div class="add mt-3">
      <PlusIcon />
      <span>New Goal</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.add {
  @include flexbox(column, center, center);
  gap: 0.5rem;
}

span {
  font-size: small;
}
</style>
