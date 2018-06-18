<template>
    <header v-bind:class="style.root" >
        <img v-bind:src="vueLogo" v-bind:class="style.vueLogo" alt="React logo" />
        <img v-bind:src="stylableLogo" v-bind:class="style.stylableLogo" alt="Stylable logo" />
        <h1 v-bind:class="style.title" >
            Welcome to Vue with Stylable
        </h1>
    </header>
</template>

<script>
import Vue from 'vue'; 
import vueLogo from '../logos/vue.svg';
import stylableLogo from '../logos/stylable.svg';
import style from './top.st.css';

export default {
    name: "top",
    data: () => { return { style, vueLogo, stylableLogo }; }
};
</script>