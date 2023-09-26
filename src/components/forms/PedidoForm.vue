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
                <div class="col-md-5 mb-3">

                <select class="selectpicker form-control"  data-live-search="true" id="aprovacao" name="aprovacao" v-model="pedido.cliente">
                  <option value="undefined">Pessoa</option>
                <option v-for="pess in PessoaList" :key="pess.id" :value="pess">{{ pess.nome }}</option>
                </select>
                
                </div>
                <div class="col-md-3 mb-3">
             
   
             <select class="form-select" placeholder="N doc" v-model="pedido.formaPaga">
       <option v-for="forma in formas" :key="forma" :value="forma">{{ forma }}</option>
       <option value="undefined">Forma de Pagamento</option>
     </select>
           </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-3 mb-3">
                  <input type="text" placeholder="Banco" class="form-control" v-model="pedido.valorDoc">
                </div>
                <div class="col-md-2 mb-3">
                    <input
                    type="text"
                    placeholder="Agencia"

                    class="form-control"
                    v-model="pedido.juros"
                    v-mask="'##\\%'"
                    />

                </div>
                <div class="col-md-3 mb-3">
                    <input
                    type="text"
                    placeholder="Juros"

                    class="form-control"
                    v-model="pedido.juros"
                    v-mask="'##\\%'"
                    />

                </div>
              </div>
            </div>
      
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-5 mb-3">
                  <input type="text" placeholder="Numero do Cheque" class="form-control" v-model="pedido.quantidade">
                </div>

                <div class="col-md-3 mb-3">
                  <input type="date" placeholder="Vencimento"  class="form-control" v-model="pedido.emitente">
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
      <div class="row">
        
        <div class="col-md-2 offset-md-6">
        </div>
        <div class="col-md-2">
          
          <div class="d-grid gap-2">
            
            <button v-if="form === 'Cheque'" type="button" class="btn btn-secondary" @click="onClickCadastrarDiario()">Incluir Chueque</button>
            
          </div>
        </div>
      </div>

    <div class="container" style="margin-top: 10px">
      
      

      <div class="row">
        <div >
          <table class=" carder table table-borderless ">
            <thead >
    <tr>
      <th scope="col">Doc</th>
      <th scope="col" >Cod.Banco</th>
      <th scope="col" >Num Cheque</th>
      <th scope="col" >Valor</th>
      <th scope="col" >Vencimento</th>


    </tr>
  </thead>
  <tbody class="btn:hover">
    <tr class=" card-hover fundo">
      <td> 1</td>
      <td>Teste banco</td>
      <td>teste cheque</td>
      <td>TEste valor </td>
      <td>Teste vencimento </td>
    </tr>
  </tbody>  
          </table>
        </div>
      </div>
    </div>
      <div class="col-md-2 offset-md-3">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
 
  <div class="card-body">
    <p v-if="form === 'Promissoria'"  class=" letra1 card-title">R${{calculoComposto().valorInicial.toFixed(2)}}+R${{calculoComposto().juros.toFixed(2)}}</p>
    <h5 v-if="form === 'Promissoria'"  class="card-title">Total=R${{calculoComposto().resultado.toFixed(2)}}</h5>
    <p  v-if="form === 'Promissoria'"  class=" card-text">Parcela=R${{calculoComposto().parcela.toFixed(2)}}
      x{{calculoComposto().quantidade}}</p>


      <p v-if="form === 'Cheque'"  class=" letra1 card-title">R${{calculoSimples().valorInicial.toFixed(2)}}+R${{calculoSimples().juros.toFixed(2)}}</p>
    
    <h5  v-if="form === 'Cheque'" class="card-title">Total=R${{calculoSimples().total.toFixed(2)}}</h5>
    <p  v-if="form === 'Cheque'" class="card-text">Parcela=R${{calculoSimples().parcela.toFixed(2)}}
      x{{calculoSimples().quantidade}}</p>
  </div>
</div>
</div>

      <div class="row">
        
        <div class="col-md-2 offset-md-6">
        </div>
        <div class="col-md-2">
          
          <div class="d-grid gap-2">
            
            <button v-if="form === 'Cheque'" type="button" class="btn btn-secondary" @click="onClickCadastrarDiario()">Cheque</button>
            <button v-if="form === 'Promissoria'" type="button" class="btn btn-secondary" @click="onClickCadastrarComposto()">Promissoria</button>
            <button v-if="form === 'Cartao'" type="button" class="btn btn-secondary" @click="onClickCadastrarSimples()">Cartao</button>
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

      this.pedido.parcelas = []; // Inicialize this.pedido.parcelas como um array vazio
for (let i = 0; i < this.pedido.quantidade; i++) {
  let parcela = new HistoricoModel();
  let data = new Date();
  data.setMonth(data.getMonth() + i + 1);
  parcela.proxPgamaneto = data;

  // Defina o relacionamento com o pedido
  parcela.operacao = this.pedido; // Use parcela.operacao para definir o relacionamento

  this.pedido.parcelas.push(parcela);
  console.log(parcela);
}


        PedidoClient.cadastroSimples(this.pedido)
        .then(success => {
          this.pedido = new PedidoModel();
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
  let resultado: number;

  if (isNaN(valorInicial) || isNaN(jurosInt) || isNaN(quantidade)) {
    console.error('Valores inválidos para cálculo.');
    return { resultado: 0, parcela: 0, quantidade: 0, juros: 0, valorInicial: 0 };
  }

  if (String(this.pedido.formaPaga) == "Cheque") {
    resultado = 0;
    console.log(valorInicial);
    valorInicial = valorInicial/quantidade;
    console.log("cada chquue"+valorInicial);
    for (let i: number = 0; i < quantidade; i++) {
    let valorCheque:number = valorInicial / ((i+1) + jurosDecimal);  
    resultado=resultado + valorCheque;
    console.log(resultado+" chuqe=" +(i+1));
    }
  } else {
    resultado = valorInicial;
    for (let i: number = 0; i < quantidade; i++) {
      let valorJuros: number = resultado * jurosDecimal;
      resultado = resultado + valorJuros;
      console.log(resultado);
    }
  }

  let juros = resultado - valorInicial;
  let parcela = resultado / quantidade;

  return { resultado, parcela, quantidade, juros, valorInicial };
},
    calculoSimples() {
      const valorInicial: number = Number(this.pedido.valorDoc);
  const jurosInt: number = Number(this.pedido.juros);
  const quantidade: number = Number(this.pedido.quantidade);
  const jurosDecimal: number = jurosInt / 100.0;
  let juros:number;
  if (isNaN(valorInicial) || isNaN(jurosInt) || isNaN(quantidade)) {
    console.error('Valores inválidos para cálculo.');
    return { parcela: 0, total: 0 ,quantidade: 0, valorInicial:0,juros:0 }; 
  }
  const valorJuros: number = valorInicial * jurosDecimal;
  const parcela: number = valorJuros + (valorInicial / quantidade);



  const total: number = parcela * quantidade;
  juros = total - valorInicial;

  return { parcela, total,quantidade,valorInicial,juros};
}
  }
});
</script>


<style scoped>
.letra1{
  font-size: 15px;
  color: rgb(0, 99, 0);
}

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

