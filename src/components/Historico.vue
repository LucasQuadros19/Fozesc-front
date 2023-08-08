<template>
    <div class="container" style="margin-top: 10px">
      <div class="row">
        <div class="col-md-11  text-start"><p class="fs-3">Imoveis</p></div>
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
      <th scope="col" class="text-start">Nome</th>
      <th scope="col" class="text-end">quantidade</th>
      <th scope="col" class="text-start">formaPaga</th>
      <th scope="col" class="text-start">valor</th>
      <th scope="col">Ativo</th>
      <th scope="col">Opção</th>
    </tr>
  </thead>
  
  
  
  <tbody v-for="item in List" :key="item.id" class="table-group-divider">
    <tr>
      <td>{{ item.id }}</td>
      <td>{{ item.cliente.nome }}</td>
      <td>{{ item.emprestimo.quantidade}}</td>
      <td>{{ item.emprestimo.formaPaga}}</td>
      <td>{{ item.emprestimo.valor}}</td>
      <td>
        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
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
  import HistoricoClient from '@/client/HistoricoClient';
  import { HistoricoModel } from '@/model/HistoricoModel';
  
  
  export default defineComponent({
    name: 'Lista',
    data() {
      return {
        List: new Array<HistoricoModel>()
      };
    },
    mounted() {
      this.findAll();
    },
    methods: {
      findAll() {
        HistoricoClient.listaAll()
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


  