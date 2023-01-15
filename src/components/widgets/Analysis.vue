<script setup>
// Donut chart - Volume per exercise
const donutOptions = {
  labels: ['Bench Press', 'Rows', 'Pull Ups', 'Overhead Press'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '60%'
      }
    }
  },
  fill: {
    colors: ['#fba300', '#4e4a55']
  },
  colors: ['#fba300', '#4e4a55'],
  tooltip: {
    enabled: true,
    y: {
      formatter: val => val + ' lbs'
    }
  }
}
const donutSeries = [25, 10, 50, 30];
</script>

<template>
  <section class="h-100">
    <!-- Title -->
    <div class="mb-3">
      <h6><b>Analysis</b></h6>
    </div>
    <!-- Content -->
    <div class="container-fluid">
      <div class="row gy-3 align-items-center">
        <!-- Donut Chart -->
        <div class="col-12 col-lg-4 d-flex justify-content-center">
          <apexchart width="250" type="donut" :options="donutOptions" :series="donutSeries"></apexchart>
        </div>
        <div class="col-12 col-lg-8">
          <div class="row">
            <!-- Exercise Highlights -->
            <div class="col-12 col-sm-6 col-md-4">
              <p class="text-center"><b>Bench Press</b></p>
              <ul>
                <li><b>Vol</b>: 200 lbs</li>
                <li><b>Sets</b>: 3</li>
                <li><b>Reps</b>: 30</li>
                <li><b>1RM</b>: 140 lbs</li>
              </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <p class="text-center"><b>Pull Ups</b></p>
              <ul>
                <li><b>Vol</b>: 200 lbs</li>
                <li><b>Sets</b>: 3</li>
                <li><b>Reps</b>: 30</li>
                <li><b>1RM</b>: 140 lbs</li>
              </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <p class="text-center"><b>Rows</b></p>
              <ul>
                <li><b>Vol</b>: 200 lbs</li>
                <li><b>Sets</b>: 3</li>
                <li><b>Reps</b>: 30</li>
                <li><b>1RM</b>: 140 lbs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

section {
  display: grid;
}

p {
  color: $darker;

  b {
    font-size: large;
  }
}
</style>
