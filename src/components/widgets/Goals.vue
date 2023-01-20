<script setup>
// Vue API
import { ref } from 'vue';

// Icons
import EditIcon from '../icons/IconEdit.vue';

// Components
import Goal from '../Goal.vue';

// Data
let editMode = ref(false);

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
      <div class="bars row">
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
    <div v-if="!editMode" class="edit mt-4" @click="editMode = true">
      <EditIcon />
      <span>Edit</span>
    </div>
    <div class="row gy-1" v-else>
      <div class="col-6 col-sm-3 col-lg-6" v-for="goal in goals" :key="goal.id">
        <div>
          <input :id="goal.id" type="checkbox" v-model="goal.active" />
          <label :for="goal.id">&nbsp;{{ goal.name }}</label>
        </div>
      </div>
      <!-- Done -->
      <button class="mt-2" type="button" @click="editMode = false">✓ Done</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

section {
  min-height: 20rem;
}

.bars {
  height: 8.5rem;
  overflow-y: auto;
}

.edit {
  @include flexbox(column, center, center);
  gap: 0.5rem;
}

button {
  border: 0;
  border-radius: 5px;
  padding: 0.2rem 0;

  &:active {
    transform: translateY(1px);
    filter: brightness(0.8);
  }
}

span, button {
  font-size: small;
}

::-webkit-scrollbar {
  display: none;
}
</style>
