import { AbstractEntity } from "./AbstractEntity"
import { AprovacaoModel } from "./AprovacaoModel"
import { Destino } from "./Destino"
import { EmprestimoModel } from "./EmprestimoModel"
import { PedidoModel } from "./PedidoModel"
import { Situacao } from "./Situacao"
export class OperacaoModel extends AbstractEntity {
    status!:AprovacaoModel
    pedido!:PedidoModel
    emitente!:String
    emprestimo!:EmprestimoModel
    dtPgto!:Date
    destino!:Destino
    vencimento!:Date
    situacao!:Situacao
    observacao!:String
}