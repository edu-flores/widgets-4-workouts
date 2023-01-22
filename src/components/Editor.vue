<script setup>
// Props
const props = defineProps({
  range: Object
});

// Bold, italic, underline or strikethrough a text
const editText = type => {
  switch (type) {
    case 'bold':
      document.execCommand('bold', false);
      break;
    case 'italic':
      document.execCommand('italic', false);
      break;
    case 'underline':
      document.execCommand('underline', false);
      break;
    case 'strike':
      document.execCommand('strikethrough', false);
      break;
  }
}

// Reselect previously highlighted text
const reselectText = () => {
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(props.range);
}
</script>

<template>
  <div @click="getSelection">
    <!-- Bold -->
    <button type="button" @click="editText('bold')" @mouseup="reselectText"><b>B</b></button>
    <!-- Italic -->
    <button type="button" @click="editText('italic')" @mouseup="reselectText"><i>I</i></button>
    <!-- Underline -->
    <button type="button" @click="editText('underline')" @mouseup="reselectText"><u>U</u></button>
    <!-- Strikethrough -->
    <button type="button" @click="editText('strike')" @mouseup="reselectText"><s>S</s></button>
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
</style>
