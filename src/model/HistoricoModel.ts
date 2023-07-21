import { AbstractEntity } from "./AbstractEntity"
import { EmprestimoModel } from "./EmprestimoModel"
import { PessoaModel } from "./PessoaModel"
export class HistoricoModel extends AbstractEntity {
    cliente!:PessoaModel
    emprestimo!:EmprestimoModel

}