<script setup>
const boldText = () => {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  console.log(window.getSelection().anchorNode.parentElement);
}
</script>

<template>
  <div>
    <!-- Bold -->
    <button type="button" @click="boldText"><b>B</b></button>
    <!-- Italic -->
    <button type="button" @click="boldText"><i>I</i></button>
    <!-- Underline -->
    <button type="button" @click="boldText"><u>U</u></button>
    <!-- Strikethrough -->
    <button type="button" @click="boldText"><s>S</s></button>
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

button {
  border: 0;
  background-color: inherit;
}

b, i, u, s {
  &:hover {
    cursor: pointer;
  }
}

.bold {
  font-weight: bold;
}
.italic {
  font-style: italic;
}
.underline {
  text-decoration: underline;
}
.strike {
  text-decoration: line-through;
}
</style>
