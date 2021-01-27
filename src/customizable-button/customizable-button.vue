<template>
  <button :class="classes.root">
    <span :class="classes.label">
      {{ label }}
    </span>
  </button>
</template>

<script>
import { classes } from "./customizable-button.st.css";

export default {
  name: "customizable-button",
  props: {
    label: String,
  },
  data: () => {
    return { classes };
  },
};
</script>
