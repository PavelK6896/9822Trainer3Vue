<template>
    <router-view/>
</template>
<script>
    import HelloWorld from './components/HelloWorld.vue'
    import speech from "./components/speech.vue";

    export default {
        name: 'App',
        components: {
            speech,
            HelloWorld
        }
    }
</script>
