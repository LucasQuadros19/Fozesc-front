<template>
    <Cliente/>
    <ClienteDados/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import ClienteDados from '../components/ClienteDados.vue'
import Cliente from '../components/Cliente.vue'


export default defineComponent({
    components:{
        ClienteDados,
        Cliente

    },
    setup() {
        
    },
})
</script>
