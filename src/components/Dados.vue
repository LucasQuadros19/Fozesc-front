<template>
    <div class="container" style="margin-top: 10px">
      
      <div class="row">
        <div class="col-md-11  text-start"><p class="fs-3">Operacoes</p></div>
        <div class="col-md-1">
          <div class="d-grid gap-2">
            

          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <thead class="table-secondary">
    <tr>
      <th scope="col">ID</th>
      <th scope="col" class="text-end">Vencimento</th>
      <th scope="col" class="text-start">Nome</th>
      <th scope="col" class="text-end">№Doc</th>
      <th scope="col" class="text-start">Banco</th>
      <th scope="col" class="text-start">Situação</th>
      <th scope="col" class="text-start">Observacao</th>
      <th scope="col">Ativo</th>
      <th scope="col">Opção</th>
      <th scope="col">idid</th>
    </tr>
  </thead>
  
  
  
  <tbody v-for="item in List" :key="item.id" class="table-group-divider">
    <tr>
      <td>{{ item.id }}</td>
      <td>{{ item.vencimento }}</td>
      <td class="text-start">{{ item.cliente.nome}}</td>
      <td class="text-end">{{ item.cliente.numeroDoc }}</td>
      <td class="text-start">{{ item.cliente.banco }}</td>
      <td class="text-start">{{ item.situacao }}</td>
      <td class="text-start">{{ item.observacao }}</td>
              <td>
        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
      </td>
      <td class="text-start">

<div class="btn-group" role="group" aria-label="Basic mixed styles example">

<router-link
type="button"
class=""
:to="{ name: 'operacaoView', query: {id: item.id} }"
>
historico
</router-link>
</div>

</td>
      
      
    </tr>
  </tbody>
  
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent } from 'vue';
  import PedidoClient from '@/client/PedidoClient';
  import { PedidoModel } from '@/model/PedidoModel';
  import {useDateFormat} from "@vueuse/core";
  
  export default defineComponent({
    name: 'Lista',
    data() {
      return {
        List: new Array<PedidoModel>()
      };
    },
    mounted() {
      this.findAll();
    },
    methods: {
      findAll() {
        PedidoClient.listaAll()
          .then(success => {
            this.List = success;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  });
  </script>
  <style scoped>
  .bi {
    background-color: #2b882b;
  }
  </style>


  