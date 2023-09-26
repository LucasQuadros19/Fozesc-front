<template>
    <div>
      <div class="botao btn-group" role="group" aria-label="Basic mixed styles example">
        <router-link class="btn btn-light" :to="{ name: 'pedidoForm-simples-view', query: { form: 'Cheque' } } ">
          Cheque
        </router-link>
        <router-link class="btn btn-light" :to="{ name: 'pedidoForm-composto-view', query: { form: 'Promissoria' } } ">
          Promissoria
        </router-link>
        <router-link class="btn btn-light" :to="{ name: 'pedidoForm-diario-view', query: { form: 'Cartao' } } ">
          Cartao
        </router-link>
      </div>
      <PedidoForm />
    </div>
  </template>
  


<script lang="ts">
import { defineComponent } from 'vue'; 
import PedidoForm from '../../components/forms/PedidoForm.vue'

export default defineComponent({
    components:{

        PedidoForm,


    },
    setup() {
        
    },
})
</script>
<style scoped>
/* Estilo padrão para botões */
.custom-btn {
  background-color: #007bff; /* Cor de fundo padrão */
  color: #fff; /* Cor do texto padrão */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Efeito de transição suave */
}

/* Estilo quando o botão é selecionado */
.custom-btn.selected {
  background-color: #28a745; /* Cor de fundo quando selecionado */
}

/* Estilo de hover para botões */
.custom-btn:hover {
  background-color: #0056b3; /* Cor de fundo ao passar o mouse */
  color: #fff; /* Cor do texto ao passar o mouse */
}
.botao{
    box-shadow: 1px 1px 6px rgb(148, 173, 193);
}

</style>
