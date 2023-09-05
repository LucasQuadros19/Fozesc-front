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
          <table class=" carder table table-borderless ">
  <thead>
    <tr>
      <th>ID</th>
      <th>Vencimento</th>
      <th>Nome do Cliente</th>
      <th>Número do Documento</th>
      <th>Banco</th>
      <th>Situação</th>
      <th>Observação</th>
      <th>total</th>
      <th>Status</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody v-for="item in List" :key="item.id" class="btn:hover">
    <tr class=" card-hover fundo">
      <td>{{ item.id }}</td>
      <td>{{ item.cadastro }}</td>
      <td class="text-start">{{ item.cliente.nome}}</td>
      <td class="text-end">{{ item.cliente.numeroDoc }}</td>
      <td class="text-start">{{ item.cliente.banco }}</td>
      <td class="text-start">{{ item.situacao }}</td>
      <td class="text-start">{{ item.observacao }}</td>
      <td class="text-start">{{ item.total.toFixed(2) }}</td>

      <td>
        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
      </td>
      <td class="text-start">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <router-link
            type="button"
            class="btn btn-sm btn-info" 
            :to="{ name: 'operacaoView', query: {id: item.id} }"
          >
            Historico
          </router-link>
          <router-link 
            type="button" 
            class="btn btn-sm btn-warning" 
            :to="{ name: 'operacaoView', query: {id: item.id} }"
          > 
            Editar
          </router-link>
          <router-link 
            type="button" 
            class="btn btn-sm btn-danger" 
            :to="{ name: 'operacaoView', query: {id: item.id} }"
          >
            Excluir
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
        PedidoClient.listaAllAtivo()
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
 .card-hover:hover {
   transform: scale(1.02);
   box-shadow: 1px 1px 6px rgb(148, 173, 193);
   
 }
 

 .carder {
   border: none;
   border-radius: 1vh;
   overflow: hidden; 
   box-shadow: 1px 1px 6px rgb(148, 173, 193);
 }
 
 tr:nth-child(odd) {
	background-color:#ffffff;
	}
	tr:nth-last-child(even) {
	background-color:#9b4646;
	}
 

 
 

 
 
 </style>


  