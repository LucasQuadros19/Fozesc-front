<template>

  <div>

    <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div>
        <form>
          <div class="mb-3 ">
            <div class="row justify-content-center ">
              <div class="col-md-4 mb-3">
                <input type="text" placeholder="Nome" aria-label="Nome" :disabled="form === 'excluir' ? disabled : false" class="form-control" v-model="pessoa.nome">
              </div>
              <div class="col-md-4 mb-3">
                <input type="text" placeholder="Cpf/Cnpj" aria-label="Cpf/Cnpj" :disabled="form === 'excluir' ? disabled : false" class="form-control" v-model="pessoa.cpfCnpj">
              </div>
            </div>
            <div class="row justify-content-center ">
              <div class="col-md-4 mb-3">
                <input type="text" placeholder="Limite" aria-label="Limite" :disabled="form === 'excluir' ? disabled : false" class="form-control" v-model="pessoa.limite">
              </div>
              <div class="col-md-4 mb-3">

       

              <select required class="form-control" id="aprovacao" name="aprovacao" v-model="pessoa.permissao">
                <option selected value="undefined">escolha a permissao</option>
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
                                
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="row justify-content-center">
              <div class="col-md-4 mb-3">
                <input type="text" placeholder="N doc" aria-label="N doc" :disabled="form === 'excluir' ? disabled : false" class="form-control" v-model="pessoa.numeroDoc"> </div>
              <div class="col-md-4 mb-3">
                <select class="form-select" placeholder="N doc" v-model="pessoa.banco">
                  <option value="undefined">escolha o Banco</option>
          <option v-for="bancos in Banco" :key="bancos" :value="bancos">{{ bancos }}</option>
        </select>
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 offset-md-4">
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-info" to="/condutor/listar">Voltar</router-link>
        </div>
      </div>
      <div class="col-md-2">
        <div class="d-grid gap-2">
          <button v-if="form === undefined" type="button" class="btn btn-success" @click="onClickCadastrar()">Cadastrar</button>
          <button v-if="form === 'editar'" type="button" class="btn btn-warning" @click="onClickEditar()">Editar</button>
          <button v-if="form === 'excluir'" type="button" class="btn btn-danger" @click="onClickExcluir()">Excluir</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import PessoaClient from '@/client/PessoaClient';
import { PessoaModel } from '@/model/PessoaModel';
import { Bancos } from '@/model/Bancos';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PessoaFormulario',
  data() {
    return {
      num1: 0,
      num2: 0,
      pessoa: new PessoaModel(),
      mensagem: {
        ativo: false,
        titulo: "",
        mensagem: "",
        css: ""
      },
      disabled: false
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    form() {
      return this.$route.query.form;
    },
    Banco() {
      return Object.values(Bancos);
    }
  },
  mounted() {
    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }
  },
  methods: {
    onClickCadastrar() {
      console.log(this.pessoa);
      PessoaClient.cadastrar(this.pessoa)
        .then(success => {
          this.pessoa = new PessoaModel();
          this.mensagem.ativo = true;
          this.mensagem.mensagem = success;
          this.mensagem.titulo = "Parabéns. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    findById(id: number) {
      PessoaClient.findById(id)
        .then(success => {
          this.pessoa = success;
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar() {
      if (this.pessoa.id) {
        PessoaClient.editar(this.pessoa.id, this.pessoa)
          .then(success => {
            this.pessoa = new PessoaModel();
            this.mensagem.ativo = true;
            this.mensagem.mensagem = success;
            this.mensagem.titulo = "Parabéns. ";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";
          })
          .catch(error => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Erro. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      } else {
        console.error("ID da pessoa indefinido. Não é possível editar.");
      }
    },
    onClickExcluir() {
      if (this.pessoa.id) {
        PessoaClient.excluir(this.pessoa.id)
          .then(success => {
            this.pessoa = new PessoaModel();
            this.$router.push({ name: 'pessoa-lista-view' });
          })
          .catch(error => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Erro. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      } else {
        console.error("ID da pessoa indefinido. Não é possível excluir.");
      }
    }
  }
});
</script>