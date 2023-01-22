<script setup>
// Vue API
import { watch, ref } from 'vue';

// Icons
import EditIcon from '../icons/IconEdit.vue';
import FilledCheckIcon from '../icons/IconFilledCheck.vue';
import EmptyCheckIcon from '../icons/IconEmptyCheck.vue';

// Components
import Goal from '../Goal.vue';
import Empty from '../Empty.vue';

// Data
const goals = ref([
{
    id: 0,
    name: 'Volume',
    progress: 0,
    limit: 15000,
    units: 'lbs',
    active: true
  },
  {
    id: 1,
    name: 'Sets',
    progress: 0,
    limit: 15,
    units: 'sets',
    active: true
  },
  {
    id: 2,
    name: 'Reps',
    progress: 0,
    limit: 350,
    units: 'reps',
    active: true
  },
  {
    id: 3,
    name: 'Exercises',
    progress: 0,
    limit: 5,
    units: 'exercises',
    active: true
  }
]);
let editMode = ref(false);

// Props
const props = defineProps({
  exercises: Array
});

// Update goals when exercises changes
watch(
  props.exercises,
  () => {
    // Volume
    const totalVolume = props.exercises.reduce((totalVolume, exercise) => {
      const exerciseVolume = exercise.sets.reduce((volume, set) => {
          return volume + (set.done ? set.weight * set.reps : 0);
      }, 0);
      return totalVolume + exerciseVolume;
    }, 0);
    goals.value[0].progress = totalVolume;

    // Sets
    const totalSets = props.exercises.reduce((totalSets, exercise) => {
      const exerciseSets = exercise.sets.reduce((setCount, set) => {
        return setCount + (set.done ? 1 : 0);
      }, 0);
      return totalSets + exerciseSets;
    }, 0);
    goals.value[1].progress = totalSets;
    
    // Reps
    const totalReps = props.exercises.reduce((totalReps, exercise) => {
      const exerciseReps = exercise.sets.reduce((reps, set) => {
        return reps + (set.done ? set.reps : 0);
      }, 0);
      return totalReps + exerciseReps;
    }, 0);
    goals.value[2].progress = totalReps;
    
    // Exercises
    goals.value[3].progress = props.exercises.length;
  }
);
</script>

<template>
  <section>
    <!-- Title -->
    <div class="mb-auto">
      <h6><b>Goals</b></h6>
    </div>
    <!-- Content -->
    <div class="container-fluid mb-auto">
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
        <!-- No Goals Selected -->
        <Empty v-if="goals.filter(goal => goal.active).length === 0" message="No goals selected." height="8rem" />
      </div>
    </div>
    <!-- Edit Goals -->
    <div v-if="!editMode" class="edit" @click="editMode = true">
      <EditIcon />
      <span>Edit</span>
    </div>
    <div class="row gy-1" v-else>
      <div class="col-6 col-sm-3 col-lg-6" v-for="goal in goals" :key="goal.id">
        <label class="d-flex">
          <input type="checkbox" v-model="goal.active" />
          <div v-if="goal.active"><FilledCheckIcon /></div>
          <div v-else><EmptyCheckIcon /></div>
          <span>&nbsp; {{ goal.name }}</span>
        </label>
      </div>
      <!-- Done -->
      <button class="mt-3" type="button" @click="editMode = false">✓ Done</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

section {
  min-height: 21rem;
}

.bars {
  height: 8.5rem;
  overflow-y: auto;
}

.edit {
  @include flexbox(column, center, center);
  gap: 0.5rem;
}

input {
  all: unset;
}

button {
  border: 0;
  border-radius: 5px;
  padding: 0.2rem 0;
  font-size: small;

  &:active {
    filter: brightness(0.8);
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
