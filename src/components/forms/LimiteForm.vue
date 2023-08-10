<template>
    <div>
      <div class="container mt-5">
        <div>
          <form id="formulario">
        
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-4 mb-3">
                  <input type="number" class="form-control" id="taxa" name="taxa" placeholder="Taxa" required>
                </div>
                <div class="col-md-4 mb-3">
                  <input type="number" class="form-control" id="limite" name="limite" placeholder="Limite" required>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center">
                <div class="col-md-4 mb-3">
                  <label for="aprovacao">Aprovação</label>
                  <select class="form-control" id="aprovacao" name="aprovacao" required>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  