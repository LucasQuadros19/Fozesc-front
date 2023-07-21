import { AbstractEntity } from "./AbstractEntity"
import { Forma } from "./Forma"
import { PessoaModel } from "./PessoaModel"
export class EmprestmoModel extends AbstractEntity {
    valor!:PessoaModel
    quantidade!:Number
    formaPaga!:Forma
}