<template>
    <div id="app">
        <my-nav></my-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import MyNav from '@/components/Nav';

export default {
    name: 'app',
    components: {
        MyNav
    }
}
</script>

<style>

</style>
