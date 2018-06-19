<template>
    <div :class="style.root" >
        <p :class="style.description">
            Three styled buttons, using the same base component.
            Click any of them to cause a change of state.
        </p>

        <div :class="style.buttonBox">
            <CustomizableButton 
                v-bind="style.$cssStates({ selected: selected === 'layeredButton' })"
                @click.native="$emit('select-button', 'layeredButton')"
                :class="style.layeredButton"
                label="WE" />
            <CustomizableButton
                v-bind="style.$cssStates({ selected: selected === 'noteButton' })"
                @click.native="$emit('select-button', 'noteButton')"
                :class="style.noteButton"
                label="ARE" />
            <CustomizableButton
                v-bind="style.$cssStates({ selected: selected === 'gradientButton' })"
                @click.native="$emit('select-button', 'gradientButton')"
                :class="style.gradientButton"
                label="BUTTONS" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'; 
import CustomizableButton from '../customizable-button/customizable-button.vue';
import style from './buttons-container.st.css';

export default {
    name: "buttons-container",
    components: { CustomizableButton },
    data: () => { return { style }; },
    props: {
        selected: String
    }
};
</script>