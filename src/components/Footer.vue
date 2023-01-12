<script setup>
import ResetIcon from './icons/IconReset.vue';
import ExportIcon from './icons/IconExport.vue';
import HelpIcon from './icons/IconHelp.vue';
</script>

<template>
  <footer class="container-fluid">
    <div class="row align-items-center">
      <div class="col-6 text-end">
        <ResetIcon class="me-2 mb-1" />
        <span>Reset</span>
      </div>
      <div class="col-6">
        <span>Export</span>
        <ExportIcon class="ms-2 mb-1" />
      </div>
      <!-- <div id="footer--help">
        <HelpIcon />
      </div> -->
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

footer {
  background-color: white;
  border: 1px solid $lighter;
  border-radius: 6px;
  width: 100%;
  min-height: 4rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  .row {
    min-height: inherit;
  }
}

#footer--help {
  position: absolute;
  right: 0;
}
</style>