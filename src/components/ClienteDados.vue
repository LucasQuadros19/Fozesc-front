<template>
   
   
    <div class="container" style="margin-top: 10px">
      <div class="row">
        <div class="col-md-11  text-start">
            <p class="fs-3">Parcelas</p>
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
                <path
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"
                />
                <path
                  d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </router-link>
            <!--form do bulla linha 10-->
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12">
          <table class=" table table-bordered table-hover table-striped">
            <thead class="table-secondary">
                <tr>
      <th scope="col">ID</th>
      <th scope="col" class="text-end">Vencimento</th>
      <th scope="col" class="text-start">Nome</th>
      <th scope="col" class="text-end">№Doc</th>
      <th scope="col" class="text-start">Banco</th>
      <th scope="col" class="text-start">Situação</th>
      <th scope="col">Ativo</th>
      <th scope="col">Opção</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">

      <tr>
      <td class="text-start">id</td>
      <td class="text-start">nome</td>
      <td class="text-start">Teste</td>
      <td class="text-start">Teste</td>
      <td class="text-start">Teste</td>
      <td class="text-start">cadastro</td>
      <td class="text-start">ativo</td>
      <td class="text-start">opcao</td>
    </tr>
    <tr>
      <td class="text-start">id</td>
      <td class="text-start">nome</td>
      <td class="text-start">Teste</td>
      <td class="text-start">Teste</td>
      <td class="text-start">Teste</td>
      <td class="text-start">cadastro</td>
      <td class="text-start">ativo</td>
      <td class="text-start">opcao</td>
    </tr>
    <tr>
      <td class="text-start">id</td>
      <td class="text-start">nome</td>
      <td class="text-start">Teste</td>
      <td class="text-start">Teste</td>
      <td class="text-start">Teste</td>
      <td class="text-start">cadastro</td>
      <td class="text-start">ativo</td>
      <td class="text-start">opcao</td>
    </tr>
  </tbody>
  
  
  
  
          </table>
        </div>
      </div>
    </div>
  </template>