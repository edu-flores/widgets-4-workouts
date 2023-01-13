<script setup>
import MenuIcon from '../icons/IconMenu.vue';
</script>

<template>
  <section>
    <div class="menu text-end">
      <MenuIcon />
    </div>
    <h6><b>Plate Calculator</b></h6>
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
          <p class="mb-0"><b>185 lbs</b></p>
          <span>= 70 on each side</span>
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

#barbell {
  position: relative;
  margin-left: -2rem;
}

#inner-bar {
  background-color: $light;
  width: 100%;
  height: 0.4rem;
}

#separation {
  position: relative;
  top: -0.8rem;
  left: 3rem;
  background-color: $light;
  width: 0.5rem;
  height: 1.2rem;
  border-radius: 3px;
}

#outer-bar {
  position: relative;
  top: -1.7rem;
  left: 3rem;
  background-color: $light;
  width: 7rem;
  height: 0.6rem;
  border-radius: 3px;
}

p {
  color: $darker;
  font-size: 1.6rem;
}
</style>
