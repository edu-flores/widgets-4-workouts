<template>
  <div>
    <!-- Bold -->
    <b>B</b>
    <!-- Italic -->
    <i>I</i>
    <!-- Underline -->
    <u>U</u>
    <!-- Striketrough -->
    <s>S</s>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

div {
  @include flexbox(row, center, center, 1rem);
  color: $darker;
  background-color: $light;
  height: 2rem;
  border-radius: 0 0 6px 6px;

  // Position at the bottom
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

b, i, u, s {
  &:hover {
    cursor: pointer;
  }
}
</style>
