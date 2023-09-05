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
          <form id="formulario">
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-4 mb-3">

                <select class="selectpicker form-control"  data-live-search="true" id="aprovacao" name="aprovacao" v-model="pedido.cliente">
                  <option value="undefined">Pessoa</option>
                <option v-for="pess in PessoaList" :key="pess.id" :value="pess">{{ pess.nome }}</option>
                </select>
                
                </div>
                <div class="col-md-4 mb-3">
             
   
             <select class="form-select" placeholder="N doc" v-model="pedido.formaPaga">
       <option v-for="forma in formas" :key="forma" :value="forma">{{ forma }}</option>
       <option value="undefined">Forma de Pagamento</option>
     </select>
           </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-4 mb-3">
                  <input type="text" placeholder="Valor do Documento" aria-label="Valor do Documento" class="form-control" v-model="pedido.valorDoc">
                </div>
                <div class="col-md-4 mb-3">
                    <input
                    type="text"
                    placeholder="Juros"
                    aria-label="Juros"
                    class="form-control"
                    v-model="pedido.juros"
                    v-mask="'##\\%'"
                    />

                </div>
              </div>
            </div>
      
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-4 mb-3">
                  <input type="text" placeholder="Quantidade" aria-label="Quantidade" class="form-control" v-model="pedido.quantidade">
                </div>

                <div class="col-md-4 mb-3">
                  <input type="text" placeholder="Emitente" aria-label="Emitente" class="form-control" v-model="pedido.emitente">
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-4 mb-3">
             
  
             <select class="form-select" placeholder="N doc" v-model="pedido.destino">
              <option value="undefined">Destio</option>
       <option v-for="des in destinos" :key="des" :value="des">{{ des }}</option>

     </select>
           </div>
           <div class="col-md-4 mb-3">
 
 <select class="form-select" placeholder="N doc" v-model="pedido.situacao">
<option v-for="sit in situacoes" :key="sit" :value="sit">{{ sit }}</option>
<option value="undefined">Situacao</option>
</select>
</div>
                
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-4 mb-3">
                  <input v-if="form === 'diario'" type="text" placeholder="Vencimento" aria-label="Vencimento" class="form-control" v-model="pedido.vencimento">
                </div>
                <div class="col-md-4 mb-3">
                  <input v-if="form === 'diario'" type="text" placeholder="Criação" aria-label="Criação" class="form-control" v-model="pedido.criacao">
                </div>
                
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-8 mb-3">
                  <input type=" text" placeholder="Observação" aria-label="Observação" class="form-control" v-model="pedido.observacao">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-2 offset-md-3">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
 
  <div class="card-body">
    <h5 v-if="form === 'composto'"  class="card-title">Total=R${{calculoComposto().resultado.toFixed(2)}}</h5>
    <p v-if="form === 'composto'"  class="card-text">Parcela=R${{calculoComposto().parcela.toFixed(2)}}</p>
    <h5  v-if="form === 'simples'" class="card-title">Total=R${{calculoSimples().total.toFixed(2)}}</h5>
    <p  v-if="form === 'simples'" class="card-text">Parcela=R${{calculoSimples().parcela.toFixed(2)}}</p>
  </div>
</div>
</div>
      <div class="row">
        
        <div class="col-md-2 offset-md-6">
        </div>
        <div class="col-md-2">
          
          <div class="d-grid gap-2">
            
            <button v-if="form === 'diario'" type="button" class="btn btn-secondary" @click="onClickCadastrarDiario()">diario</button>
            <button v-if="form === 'composto'" type="button" class="btn btn-secondary" @click="onClickCadastrarComposto()">composto</button>
            <button v-if="form === 'simples'" type="button" class="btn btn-secondary" @click="onClickCadastrarSimples()">simples</button>
            <button v-if="form === 'editar'" type="button" class="btn btn-warning" @click="onClickEditar()">Editar</button>
            <button v-if="form === 'excluir'" type="button" class="btn btn-danger" @click="onClickExcluir()">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  </template>

  
  

<script lang="ts">
import PedidoClient from '@/client/PedidoClient';
import { PedidoModel } from '@/model/PedidoModel';
import { HistoricoModel } from '@/model/HistoricoModel';
import HistoricoClient from '@/client/HistoricoClient';
import PessoaClient from '@/client/PessoaClient';
import { Forma } from '@/model/Forma';
import { Destino } from '@/model/Destino';
import { Situacao } from '@/model/Situacao';
import { defineComponent } from 'vue';
import { useToNumber } from '@vueuse/core';


export default defineComponent({
  name: 'PedidoForm',
  data() {
    return {
      valorDoc: 0,
        juros: 0,    
        quantidade: 0,
      resultado: 0,
        pedido: new PedidoModel(),
        PessoaList: [],
        MetodoList:["Deposito","Pix","Cheque"],
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
    formas() {
      return Object.values(Forma);
    },
    destinos() {
      return Object.values(Destino);
    },
    situacoes() {
      return Object.values(Situacao);
    }
  },
  mounted() {
    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }
    this.ListarPessoa();
  },
  methods: {
    onClickCadastrarComposto() {


        this.pedido.parcelas = [];
        for(let i=0; i<this.pedido.quantidade;i++){
          let parcela = new HistoricoModel();
          let data = new Date();
          data.setMonth(data.getMonth()+i+1);
          parcela.proxPgamaneto = data;
          this.pedido.parcelas.push(parcela);
          console.log(parcela);
        }
        PedidoClient.cadastrarComposto(this.pedido)
        .then(retorno => {
       //   this.pedido = new PedidoModel();
           this.pedido = retorno;
          this.mensagem.ativo = true;
          this.mensagem.mensagem = "sucesso";
          this.mensagem.titulo = "Parabéns. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickCadastrarSimples() {
        PedidoClient.cadastroSimples(this.pedido)
        .then(success => {
          this.pedido = new PedidoModel();
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
    onClickCadastrarDiario() {
        PedidoClient.cadastroDiario(this.pedido)
        .then(success => {
          this.pedido = new PedidoModel();
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
    onClickCadastrar() {
        PedidoClient.cadastrarComposto(this.pedido)
        .then(success => {
          this.pedido = new PedidoModel();
          this.mensagem.ativo = true;
        
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
        PedidoClient.findById(id)
        .then(success => {
          this.pedido = success;
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar() {
      if (this.pedido.id) {
        PedidoClient.editar(this.pedido.id, this.pedido)
          .then(success => {
            this.pedido = new PedidoModel();
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
        console.error("ID da pedido indefinido. Não é possível editar.");
      }
    },
    onClickExcluir() {
      if (this.pedido.id) {
        PedidoClient.excluir(this.pedido.id)
          .then(success => {
            this.pedido = new PedidoModel();
            this.$router.push({ name: 'pedido-lista-view' });
          })
          .catch(error => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Erro. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      } else {
        console.error("ID da pedido indefinido. Não é possível excluir.");
      }
    },
    ListarPessoa(){
      PessoaClient.listaAll()
      .then(success=>{this.PessoaList=success;})
      .catch(error=>{console.log(error);})

    },
    calculoComposto() {
  let valorInicial: number = Number(this.pedido.valorDoc);
  let jurosInt: number = Number(this.pedido.juros);
  let quantidade: number = Number(this.pedido.quantidade);
  let jurosDecimal: number = jurosInt / 100.0;
  let resultado: number = valorInicial;
  
  if (isNaN(valorInicial) || isNaN(jurosInt) || isNaN(quantidade)) {
    console.error('Valores inválidos para cálculo.');
    return { resultado: 0, parcela: 0 }; 
  }

  for (let i: number = 0; i < quantidade; i++) {
    let valorJuros: number = resultado * jurosDecimal;
    resultado = resultado + valorJuros;
    console.log(resultado);
  }

  let parcela = resultado/quantidade;
  

  return { resultado, parcela };
},
    calculoSimples() {
      const valorInicial: number = Number(this.pedido.valorDoc);
  const jurosInt: number = Number(this.pedido.juros);
  const quantidade: number = Number(this.pedido.quantidade);
  const jurosDecimal: number = jurosInt / 100.0;
  if (isNaN(valorInicial) || isNaN(jurosInt) || isNaN(quantidade)) {
    console.error('Valores inválidos para cálculo.');
    return { parcela: 0, total: 0 }; // Retorna valores padrão ou vazios
  }
  const valorJuros: number = valorInicial * jurosDecimal;
  const parcela: number = valorJuros + (valorInicial / quantidade);
  const total: number = parcela * quantidade;

  return { parcela, total };
}
  }
});
</script>