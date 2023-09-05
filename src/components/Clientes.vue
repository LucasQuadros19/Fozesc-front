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
            <thead >
    <tr>
      <th scope="col">ID</th>
      <th scope="col" class="text-end">Nome</th>
      <th scope="col" class="text-start">Cpf/Cnpj</th>
      <th scope="col" class="text-end">№Doc</th>
      <th scope="col" class="text-start">Limite</th>
      <th scope="col" class="text-start">Permissao</th>
      <th scope="col">Ativo</th>
      <th scope="col">Opção</th>
    </tr>
  </thead>
  <tbody v-for="item in List" :key="item.id" class="btn:hover">
    <tr class=" card-hover fundo">
      <td>{{ item.id }}</td>
      <td>{{ item.nome }}</td>
      <td class="text-start">{{ item.cpfCnpj}}</td>
      <td class="text-end">{{ item.numeroDoc }}</td>
      <td class="text-start">{{ item.limite }}</td>
      <td>
                <span v-if="item.permissao" class="badge text-bg-success"> Sim </span>
                <span v-if="!item.permissao" class="badge text-bg-danger"> nao </span>
              </td>
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
                  historico
                  </router-link>
                  <router-link type="button" class="btn btn-sm btn-warning" 
                  :to="{ name: 'operacaoView', query: {id: item.id} }"> 
                    Editar
                  </router-link>
                  <router-link type="button" class="btn btn-sm btn-danger" 
                  :to="{ name: 'operacaoView', query: {id: item.id} }">
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
  import PessoaClient from '@/client/PessoaClient';
  import { PessoaModel } from '@/model/PessoaModel';
  import {useDateFormat} from "@vueuse/core";
  
  export default defineComponent({
    name: 'Cliente',
    data() {
      return {
        List: new Array<PessoaModel>()
      };
    },
    mounted() {
      this.findAll();
    },
    methods: {
      findAll() {
        PessoaClient.listaAll()
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







</style>

  