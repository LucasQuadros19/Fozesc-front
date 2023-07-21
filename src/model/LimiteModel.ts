import { AbstractEntity } from "./AbstractEntity"
import { PessoaModel } from "./PessoaModel"
export class LimiteModel extends AbstractEntity {
    cliente!:PessoaModel
    taxa!:Number
    limite!:Number
    aprovacao!:boolean
}