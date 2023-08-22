<template>
  <div v-if="selectedItems.length > 0" class="container" style="margin-top: 10px">
    <div class="row d-flex align-items-center">
      <div class="col-md-2 text-start">
        <router-link
          type="button"
          class=""
          :to="{ name: 'informacoesView', query: { id: selectedItems[0].id } }"
        >
          <p class="fs-3">{{ selectedItems[0].cliente.nome }}</p>
        </router-link>
      </div>
      <div class="col-md-2 text-start">
        <p class="fs-4">{{ selectedItems[0].cliente.cpfCnpj }}</p>
      </div>
      <div class="col-md-2 text-start">
        <p class="fs-3">{{ selectedItems[0].cliente.numeroDoc }}</p>
      </div>
      <div class="col-md-1 text-start">
        <p class="fs-3">{{ selectedItems[0].cliente.banco }}</p>
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
        <table class="table table-bordered table-hover table-striped">
          <thead class="table-secondary">
            <tr>
              <th scope="col">ID</th>
              <th scope="col" class="text-end">Vencimento</th>
              <th scope="col" class="text-end">Parcela</th>
              <th scope="col" class="text-start">Banco</th>
              <th scope="col" class="text-start">Situação</th>
              <th scope="col">Ativo</th>
              <th scope="col">Opção</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <template v-for="(item, index) in selectedItems" :key="item.id">
           

              <template v-if="item.parcelas && item.parcelas.length > 0">
                <tr v-for="(parcela, parcelaIndex) in item.parcelas" :key="parcela.id">
                  <td class="text-start">{{ parcela.id }}</td>
                  <td class="text-start">{{ parcela.proxPgamaneto.join('/') }}</td>
                  <td class="text-start">{{ parcelaIndex + 1 }}</td>
                  <td class="text-start">{{ item.cliente.banco }}</td>
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



