<template>
    <div :class="classes.root" >
        <p :class="classes.description">
            Three styled buttons, using the same base component.
            Click any of them to cause a change of state.
        </p>

        <div :class="classes.buttonBox">
            <CustomizableButton 
                @click.native="$emit('select-button', 'layeredButton')"
                :class="st(classes.layeredButton, { selected: selected === 'layeredButton' })"
                label="WE" />
            <CustomizableButton
                @click.native="$emit('select-button', 'noteButton')"
                :class="st(classes.noteButton, { selected: selected === 'noteButton' })"
                label="ARE" />
            <CustomizableButton
                @click.native="$emit('select-button', 'gradientButton')"
                :class="st(classes.gradientButton, { selected: selected === 'gradientButton' })"
                label="BUTTONS" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'; 
import CustomizableButton from '../customizable-button/customizable-button.vue';
import { st, classes } from './buttons-container.st.css';

export default {
    name: "buttons-container",
    components: { CustomizableButton },
    data: () => { return { st, classes }; },
    props: {
        selected: String
    }
};
</script>