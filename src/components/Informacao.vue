<template>
    <div class="row">
      <!-- Left column -->
      <div class="col-md-9">
        
        <div class="container" style="margin-top: 10px">
          <div class="row">
            <div class="col-md-11  text-start">
              <p class="fs-3">Historico de Operacoes</p>
            </div>
            <div class="col-md-1">
              <div class="d-grid gap-2">
                <router-link
                  type="button"
                  class="btn btn-success"
                  to="/propriedade/formulario"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-house-add"
                    viewBox="0 0 16 16"
                  >

                  </svg>
                </router-link>

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
                <tbody class="table-group-divider">
                  <tr>
                    <td class="text-start">id</td>
                    <td class="text-start">00/00/0000</td>
                    <td class="text-start">R$:1000.00</td>
                    <td class="text-start">10x</td>
                    <td class="text-start">Pix</td>
                    <td ><span class="badge text-bg-success"> Finalizado </span></td>
                    <td class="text-start">opcao</td>
                  </tr>
                  <tr>
                    <td class="text-start">id</td>
                    <td class="text-start">00/00/0000</td>
                    <td class="text-start">R$:1000.00</td>
                    <td class="text-start">10x</td>
                    <td class="text-start">Pix</td>
                    <td ><span class="badge text-bg-info"> Ativa </span></td>
                    <td class="text-start">opcao</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Right column -->
      <div class="col-md-3">
        <H3>coluna direita</H3>
        <H4>Limite</H4>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>

  </style>
  