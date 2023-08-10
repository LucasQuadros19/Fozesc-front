<template>
    <div>
        
      <div class="container mt-5">
        <div>
          <form>
            <div class="mb-3 ">
              <div class="row justify-content-center ">
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" placeholder="Nome" aria-label="Nome">
                </div>
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" placeholder="Cpf/Cnpj" aria-label="Cpf/Cnpj">
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" id="numeroDoc" name="numeroDoc" placeholder="Número do Documento" required>
                </div>
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" id="banco" name="banco" placeholder="Banco" required>
                </div>
              </div>
            </div>
            <div class="te ml-1 "> 
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    
  </template>
  