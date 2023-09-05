import { AbstractEntity } from "./AbstractEntity"
import { Bancos } from "./Bancos"
export class PessoaModel extends AbstractEntity {
    nome!:String
    cpfCnpj!:String
    numeroDoc!:String
    banco!:Bancos
    permissao!: boolean
    limite!:Number
    
}