<template>
  <!-- Blurred background -->
  <div class="background">
    <!-- Content -->
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(8px);
}

.modal-content {
  background-color: white;
  border: 1px solid $lighter;
  border-radius: 6px;
  padding: 1.5rem 2rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  width: fit-content;
  height: fit-content;

  // Position
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
