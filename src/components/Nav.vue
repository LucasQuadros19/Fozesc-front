<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Teste</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link> 
            </li>
            <li class="nav-item">
<router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
        </li>
        <li class="nav-item">
<router-link class="nav-link active" aria-current="page" to="/informacoesView">informacoes</router-link>

        </li>
        <li class="nav-item">
<router-link class="nav-link active" aria-current="page" to="/operacaoView">Operacao</router-link>

        </li>
        <li class="nav-item">
<router-link class="nav-link active" aria-current="page" to="/pessoaForm">Pessoa</router-link>

        </li>
        
          </ul>          
        </div>
      </div>
    </nav>
    
    <Dados/>
    </template>
    
    <script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Nav",
});
</script>