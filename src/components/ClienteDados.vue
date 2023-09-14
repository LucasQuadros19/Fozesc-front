<template>
  <div v-if="selectedItems.length > 0" class="container" style="margin-top: 10px">
    <div class="cliente row d-flex align-items-center">
      <div class="col-md-2 text-start">
        <router-link
          type="button"
          class="btn  "
          :to="{ name: 'informacoesView', query: { id: selectedItems[0].id } }"
        >
          <p class="fs-5 ">{{ selectedItems[0].cliente.nome }}</p>
        </router-link>
      </div>
      <div class="col-md-2 text-start">
        <p class="fs-5 ">{{ selectedItems[0].cliente.cpfCnpj }}</p>
      </div>
      <div class="col-md-2 text-start">
        <p class="fs-5">{{ selectedItems[0].cliente.numeroDoc }}</p>
      </div>
      <div class="col-md-1 text-start">
        <p class="fs-4">{{ selectedItems[0].cliente.banco }}</p>
      </div>
      <div class="col-md-2">
        <div class="d-grid gap-2">
        </div>
      </div>
    </div>
      
    <hr>
      
    <div class="row">
      <div class="col-md-11 text-start">
        <p class="fs-3">Parcelas</p>
      </div>
      <div class="col-md-1">
        <div class="d-grid gap-2">
        </div>
      </div>
    </div>
  
    <div class="row">
      <div class="col-md-12">
        <table class=" carder table table-borderless ">
          <thead class="table-secondary">
            <tr>
              <th scope="col">ID</th>
              <th scope="col" class="text-start">Vencimento</th>
              <th scope="col" class="text-start">Parcelas</th>
              <th scope="col" class="text-start">Situação</th>
              <th scope="col">Ativo</th>
              <th scope="col">Opção</th>
            </tr>
          </thead>
          <tbody class="btn:hover">
            <template v-for="(item, index) in selectedItems" :key="item.id">
              <template v-if="item.parcelas && item.parcelas.length > 0" >
                <tr class=" card-hover fundo "  v-for="(parcela, parcelaIndex) in item.parcelas" :key="parcela.id">
                  <td class="text-start ">{{ parcelaIndex + 1 }}</td>
                  <td class="text-start">{{ parcela.proxPgamaneto.join('/') }}</td>
                 
                  <td class="text-start">R${{ item.valorLiquido.toFixed(2) }}</td>
                  <td class="text-start">{{ item.situacao }}</td>
                  <td class="text-start">{{ item.ativo }}</td>
                  <td class="text-start">opcao</td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import PedidoClient from '@/client/PedidoClient';
import { PedidoModel } from '@/model/PedidoModel';

export default defineComponent({
  name: 'Parcelas',
  data() {
    return {
      selectedItems: [] as PedidoModel[],
    };
  },
  mounted() {
    this.findSelectedItems();
  },
  methods: {
    findSelectedItems() {
      const route = useRouter();
      const id = route.currentRoute.value.query.id;

      if (typeof id === 'string' && !isNaN(Number(id))) {
        const numericId = Number(id);

        PedidoClient.findById(numericId)
          .then((success: PedidoModel) => {
            this.selectedItems = [success];
            console.log("Dados da API:", this.selectedItems);
          })
          .catch((error) => {
            console.log("Erro na API:", error);
          });
      } else {
        console.error("Invalid ID:", id);
      }
    },
  },
});
</script>

<style scoped>
.bi {
  background-color: #2b882b;
}
.card-hover:hover {
transform: scale(1.02);
box-shadow: 1px 1px 6px rgb(159, 158, 158);

}


.carder {
border: none;
border-radius: 1vh;
overflow: hidden; 
box-shadow: 1px 1px 6px rgb(213, 213, 213);
}

tr:nth-child(odd) {
background-color:#ffffff;
}
tr:nth-last-child(even) {
background-color:#9b4646;
}




.cliente {
  box-shadow: 1px 1px 6px rgb(213, 213, 213);
    background-color: #f6f6f6; /* Cor de fundo */
    padding: 10px; /* Espaçamento interno */
    border-radius: 5px; /* Borda arredondada */
    margin-bottom: 20px; /* Espaçamento inferior entre as linhas */
  }

  /* Estilização para os elementos "col-md-2" */
 

  /* Estilização para o elemento "router-link" */

  /* Estilização para o elemento "p" dentro do "router-link" */
 
  /* Estilização para a classe "d-grid" */
  .d-grid {
    text-align: center; /* Alinhamento do texto */
  }


</style>

