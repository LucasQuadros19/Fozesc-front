import { AbstractEntity } from "./AbstractEntity"
import { EmprestmoModel } from "./EmprestimoModel"
import { PessoaModel } from "./PessoaModel"
export class HistoricoModel extends AbstractEntity {
    cliente!:PessoaModel
    emprestimo!:EmprestmoModel

}