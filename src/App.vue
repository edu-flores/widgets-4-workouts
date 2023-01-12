<script setup>
import Header from './components/Header.vue';
import Stadistics from './components/Stadistics.vue';
import PlateCalculator from './components/PlateCalculator.vue';
import Music from './components/Music.vue';
import WarmupDropset from './components/WarmupDropset.vue';
import Timer from './components/Timer.vue';
import Log from './components/Log.vue';
import Analysis from './components/Analysis.vue';
import Goals from './components/Goals.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="main-container">
    <Header />
    <main class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-8">
          <Stadistics />
        </div>
        <div class="col-12 col-md-4">
          <PlateCalculator />
        </div>
        <div class="col-12 col-lg-4">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-12">
              <Music />
            </div>
            <div class="col-12 col-sm-6 col-md-3 col-lg-6">
              <WarmupDropset />
            </div>
            <div class="col-12 col-sm-6 col-md-3 col-lg-6">
              <Timer />
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8">
          <Log />
        </div>
        <div class="col-12 col-lg-8">
          <Analysis />
        </div>
        <div class="col-12 col-lg-4">
          <Goals />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
#main-container {
  max-width: 80rem;
  margin: auto;
}

main * {
  border: 1px solid green;
  padding: 1.5rem;
}
</style>
