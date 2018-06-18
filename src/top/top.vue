<template>
    <header :class="style.root" >
        <img :src="vueLogo" :class="style.vueLogo" alt="React logo" />
        <img :src="stylableLogo" :class="style.stylableLogo" alt="Stylable logo" />
        <h1 :class="style.title" >
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