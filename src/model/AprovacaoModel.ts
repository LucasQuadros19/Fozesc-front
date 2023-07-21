import { AbstractEntity } from "./AbstractEntity"
import { LimiteModel } from "./LimiteModel"
import { Status } from "./Status"
export class AprovacaoModel extends AbstractEntity {
    limite!:LimiteModel
    indicacao!:String
    aprovacao!:Boolean
    status!:Status
}