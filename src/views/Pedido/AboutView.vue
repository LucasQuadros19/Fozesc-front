<template>



<router-link class="btn col-md-1 offset-md-9 btn-primary" aria-current="page" :to="{ name: 'pedidoForm-composto-view', query: { form: 'composto' } } ">+</router-link>
<select class="selectpicker" data-live-search="true">
  <option data-tokens="ketchup mustard">Hot Dog, Fries and a Soda</option>
  <option data-tokens="mustard">Burger, Shake and a Smile</option>
  <option data-tokens="frosting">Sugar, Spice and all things nice</option>
</select>


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