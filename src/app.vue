<template>
   <div :class="classes.root" >
        <Top :class="classes.top" />
        <ButtonsContainer 
            @select-button="selectButton($event)"
            :selected="selected"
            :class="classes.buttonsContainer" />
    </div>
</template>

<script>
import { classes } from "./app.st.css";
import Top from "./top/top.vue";
import ButtonsContainer from "./buttons-container/buttons-container.vue";

export default {
    name: "app",
    components: { Top, ButtonsContainer },
    data: () => {
        return { classes, selected: "noteButton" };
    },
    methods: {
        selectButton(button) {
            this.selected = button;
        }
    }
};
</script>
