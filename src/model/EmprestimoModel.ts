import { AbstractEntity } from "./AbstractEntity"
import { Forma } from "./Forma"
import { PessoaModel } from "./PessoaModel"
export class EmprestimoModel extends AbstractEntity {
    valor!:PessoaModel
    quantidade!:Number
    formaPaga!:Forma
}