<script setup>
import MenuIcon from '../icons/IconMenu.vue';
</script>

<template>
  <section class="text-center">
    <div class="menu text-end">
      <MenuIcon />
    </div>
    <p class="mb-0"><b>225 lbs</b></p>
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-6">
          <span><i>90 lbs</i></span>
        </div>
        <div class="col-6">
          <span><i>180 lbs</i></span>
        </div>
        <div class="col-12">
          <span><i>135 lbs</i></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.menu {
  margin-top: -1.5rem;
  margin-right: -1rem;
}

p {
  color: $darker;
  font-size: 1.6rem;
}

span {
  font-size: medium;
}
</style>
