<script setup>
// Icons
import EditIcon from '../icons/IconEdit.vue';

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
        <div
          class="col-12 col-sm-6 col-lg-12"
          v-for="goal in goals.filter(goal => goal.active)"
          :key="goal.id"
        >
          <Goal
            :name="goal.name"
            :progress="goal.progress"
            :limit="goal.limit"
            :units="goal.units"
          />
        </div>
      </div>
    </div>
    <!-- Edit Goals -->
    <div class="edit mt-3">
      <EditIcon />
      <span>Edit</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.row {
  height: 8.5rem;
  overflow-y: auto;
}

.edit {
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
