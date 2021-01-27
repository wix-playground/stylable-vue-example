<template>
  <header :class="classes.root">
    <img :src="vueLogo" :class="classes.vueLogo" alt="Vue logo" />
    <img
      :src="stylableLogo"
      :class="classes.stylableLogo"
      alt="Stylable logo"
    />
    <h1 :class="classes.title">Welcome to Vue with Stylable</h1>
  </header>
</template>

<script>
import vueLogo from "../logos/vue.svg";
import stylableLogo from "../logos/stylable.svg";
import { classes } from "./top.st.css";

export default {
  name: "top",
  data: () => {
    return { classes, vueLogo, stylableLogo };
  },
};
</script>
