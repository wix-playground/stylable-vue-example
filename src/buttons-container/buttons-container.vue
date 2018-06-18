<template>
    <div
        v-bind="style.$cssStates({ selected })" 
        :class="style.root" >
        <p :class="style.description">
            Three styled buttons, using the same base component.
            Click any of them to cause a change of state.
        </p>
        <div :class="style.buttonBox">
            <CustomizableButton 
                @click.native="$emit('select-button', 'one')"
                :class="style.firstButton"
                label="one" />
            <CustomizableButton
                @click.native="$emit('select-button', 'two')"
                :class="style.secondButton"
                label="two" />
            <CustomizableButton
                @click.native="$emit('select-button', 'three')"
                :class="style.thirdButton"
                label="three" />
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