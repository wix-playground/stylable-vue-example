<template>
    <div :class="style.root" >
        <Top :class="style.top" />
        <ButtonsContainer 
            @select-button="selectButton($event)"
            :selected="selected"
            :class="style.buttonsContainer" />
    </div>
</template>

<script>
import Vue from 'vue';
import style from "./app.st.css";
import Top from "./top/top.vue";
import ButtonsContainer from "./buttons-container/buttons-container.vue";

export default {
    name: "app",
    components: { Top, ButtonsContainer },
    data: () => { return { style, selected: 'noteButton' }; },
    methods: {
        selectButton(button) {
            this.selected = button;
        }
    }
};
</script>