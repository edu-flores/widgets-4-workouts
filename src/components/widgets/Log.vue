<script setup>
// Icons
import StopwatchIcon from '../icons/IconStopwatch.vue';
import FilledCheckIcon from '../icons/IconFilledCheck.vue';
import EmptyCheckIcon from '../icons/IconEmptyCheck.vue';
</script>

<template>
  <section>
    <!-- Title -->
    <div class="mb-3">
      <h6><b>Log</b></h6>
    </div>
    <!-- Content -->
    <div>
      <div class="mb-2">
        <span><b>Bench Press</b></span>
        <StopwatchIcon class="ms-2 mb-1" />
      </div>
      <!-- Exercie Table -->
      <table class="w-100 text-center">
        <thead>
          <tr>
            <th class="w-25">SET</th>
            <th class="w-25">WEIGHT</th>
            <th class="w-25">REPS</th>
            <th class="w-25">DONE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="w-25">1</td>
            <td class="w-25">170 lbs</td>
            <td class="w-25">8</td>
            <td class="w-25"><FilledCheckIcon /></td>
          </tr>
          <tr>
            <td class="w-25">2</td>
            <td class="w-25">170 lbs</td>
            <td class="w-25">6</td>
            <td class="w-25"><EmptyCheckIcon /></td>
          </tr>
          <tr>
            <td class="w-25">3</td>
            <td class="w-25">170 lbs</td>
            <td class="w-25">4</td>
            <td class="w-25"><EmptyCheckIcon /></td>
          </tr>
        </tbody>
      </table>
      <!-- New Set & Exercise -->
      <button type="button" class="add-set w-100">+ Add Set</button>
      <button type="button" class="add-exercise w-100">+ Add Exercise</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

span {
  color: $darker;
}

@media #{map-get($queries, sm)} {
  .log {
    padding-right: 2rem;
  }
}

th {
  font-weight: 100;
  padding-bottom: 0.5rem;
}

td {
  padding: 0.2rem;
}

button {
  margin-top: 0.5rem;
  border: 0;
  border-radius: 5px;
  padding: 0.2rem 0;
  font-size: small;

  &:active {
    transform: translateY(1px);
    filter: brightness(0.8);
  }
}

.add-set {
  background-color: $lighter;
  color: $darker;
}

.add-exercise {
  background-color: $darker;
  color: $lighter;
}
</style>
