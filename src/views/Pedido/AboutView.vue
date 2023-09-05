<template>



<router-link class="btn col-md-1 offset-md-9 btn-primary" aria-current="page" to="/pedidoForm">+</router-link>


<Dados/>
</template>

<script>
import { defineComponent } from 'vue';
import Dados from '../../components/Dados.vue'
import PedidoForm from '../../components/forms/PedidoForm.vue'

export default defineComponent({
  components: {
    Dados,
    PedidoForm
  },
  setup() {

  }
});
</script>