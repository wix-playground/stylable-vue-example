<template>
    <button :class="style.root" > 
        <span :class="style.label" >
            {{ label }}
        </span>
    </button>
</template>

<script>
import Vue from 'vue'; 
import style from './customizable-button.st.css';

export default {
    name: "customizable-button",
    props: {
        label: String
    },
    data: () => { return { style }; }
};
</script>