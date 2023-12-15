<template>
    <div class="app">
        <router-view />
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
    name: 'App',
    components: {
        RouterView,
    }
}
</script>

<style>
.app {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>