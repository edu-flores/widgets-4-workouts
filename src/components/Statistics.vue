<script setup>
import Stat from './Stat.vue';
</script>

<template>
  <section>
    <div class="mb-3">
      <h6><b>Statistics</b></h6>
    </div>
    <div class="container-fluid">
      <div class="row gy-3">
        <div class="col-12 col-sm-6 col-lg-3" v-for="(_, i) in [1, 2, 3, 4]" :key="i">
          <Stat />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
