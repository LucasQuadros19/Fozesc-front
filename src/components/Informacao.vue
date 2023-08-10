<template>
  <div v-if="selectedItems.length > 0" class="container" style="margin-top: 10px">
    <!-- Displayed once -->
    <div class="row d-flex align-items-center">
      <div class="col-md-2 text-start">
        <router-link
          type="button"
          class=""
          :to="{ name: 'informacoesView', query: { id: selectedItems[0].id } }"
        >
          <p class="fs-3">{{ selectedItems[0].status.limite.cliente.nome }}</p>
        </router-link>
      </div>
      <div class="col-md-2 text-start">
        <p class="fs-4">{{ selectedItems[0].status.limite.cliente.cpfCnpj }}</p>
      </div>
      <div class="col-md-2 text-start">
        <p class="fs-3">{{ selectedItems[0].status.limite.cliente.numeroDoc }}</p>
      </div>
      <div class="col-md-2 text-start">
        <p class="fs-3">{{ selectedItems[0].status.limite.cliente.banco }}</p>
      </div>
      <hr>
    <div class="col-md-2">
      <div class="d-grid gap-2">

      </div>
    </div>
  </div>
    
        
        <div class="container" style="margin-top: 10px">
          <div class="row">
            <div class="col-md-11  text-start">
              <p class="fs-3">Historico de Operacoes</p>
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
                    <th scope="col" class="text-end">Data</th>
                    <th scope="col" class="text-start">Emprestimo</th>
                    <th scope="col" class="text-end">Parcelas</th>
                    <th scope="col" class="text-start">Forma</th>
                    <th scope="col">Situacao</th>
                    <th scope="col">Opção</th>
                  </tr>
                </thead>
                <tbody  class="table-group-divider">
                  <tr v-for="item in selectedItems" :key="item.id">
                    <td class="text-start">{{item.id}}</td>
                    <td class="text-start">{{ item.cadastro}}</td>
                    <td class="text-start">{{item.emprestimo.valor}}</td>
                    <td class="text-start">{{ item.emprestimo.quantidade }}</td>
                    <td class="text-start">{{item.emprestimo.formaPaga}}</td>
                    <td ><span class="badge text-bg-success"> {{item.ativo}} </span></td>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">

<router-link
type="button"
class=""
:to="{ name: 'operacaoView', query: {id: item.id} }"
>
opcao
</router-link>
</div>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
    <div v-else class="container" style="margin-top: 10px">
    <p class="fs-4">Nenhum dado encontrado na API.</p>
  </div>
  </template>
  
  


  <script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import OperacaoClient from '@/client/OperacaoClient';
import { OperacaoModel } from '@/model/OperacaoModel';

export default defineComponent({
  name: 'Parcelas',
  data() {
    return {
      selectedItems: [] as OperacaoModel[],
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

        OperacaoClient.getOperacaoByPessoa(numericId)
          .then((success: OperacaoModel[]) => {
            if (success.length > 0) {
              this.selectedItems = success;
              console.log("Dados da API:", this.selectedItems);
            } else {
              console.log("Nenhum dado encontrado na API.");
            }
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
  <style>

  </style>
  