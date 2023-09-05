<template>
    <router-link class="btn col-md-1 offset-md-9 btn-primary" aria-current="page" to="/PessoaForm">+</router-link>
    <Clientes/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import Clientes from '../../components/Clientes.vue'
export default defineComponent({
    components:{
        Clientes

    },
    setup() {
        
    },
})
</script>
