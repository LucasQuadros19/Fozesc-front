<template>

    <PessoaForm/>
    <LimiteForm/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import PessoaForm from '../components/forms/PessoaForm.vue'
import LimiteForm from '../components/forms/LimiteForm.vue'

export default defineComponent({
    components:{
        PessoaForm,
        LimiteForm

    },
    setup() {
        
    },
})
</script>
