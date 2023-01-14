<script setup>
import Header from './components/Header.vue';
import Statistics from './components/widgets/Statistics.vue';
import PlateCalculator from './components/widgets/PlateCalculator.vue';
import Music from './components/widgets/Music.vue';
import WarmupDropset from './components/widgets/WarmupDropset.vue';
import Timer from './components/widgets/Timer.vue';
import Log from './components/widgets/Log.vue';
import Analysis from './components/widgets/Analysis.vue';
import Goals from './components/widgets/Goals.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="main-container">
    <Header />
    <main class="container-fluid py-4 px-0">
      <div class="row gy-4">
        <div class="col-12 col-md-8">
          <div class="widget">
            <Statistics />
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="widget">
            <PlateCalculator />
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="row gy-4">
            <div class="col-12 col-md-6 col-lg-12">
              <div class="custom-widget placeholder-glow">
                <Music />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 col-lg-6">
              <div class="widget">
                <WarmupDropset />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 col-lg-6">
              <div class="widget">
                <Timer />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8">
          <div class="widget">
            <Log />
          </div>
        </div>
        <div class="col-12 col-lg-8">
          <div class="widget">
            <Analysis />
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="widget">
            <Goals />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import './assets/main.scss';

#main-container {
  max-width: 80rem;
  margin: auto;
}

.widget {
  background-color: white;
  border: 1px solid $lighter;
  border-radius: 6px;
  padding: 1.5rem 2rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}

.custom-widget {
  background-color: #282828;
  border: 1px solid $lighter;
  border-radius: 6px;
  height: 152px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}
</style>
