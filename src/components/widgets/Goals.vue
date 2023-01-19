<script setup>
// Icons
import PlusIcon from '../icons/IconPlus.vue';

// Components
import Goal from '../Goal.vue';

// Props
const props = defineProps({
  goals: Array
});
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
          v-for="goal in goals"
          :key="goal.name"
          :name="goal.name"
          :progress="goal.progress"
          :limit="goal.limit"
          :units="goal.units"
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

.row {
  height: 8.5rem;
  overflow-y: auto;
}

.add {
  @include flexbox(column, center, center);
  gap: 0.5rem;
}

span {
  font-size: small;
}

::-webkit-scrollbar {
  display: none;
}
</style>
