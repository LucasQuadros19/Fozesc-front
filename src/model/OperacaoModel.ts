import { AbstractEntity } from "./AbstractEntity"
import { AprovacaoModel } from "./AprovacaoModel"
import { Destino } from "./Destino"
import { EmprestmoModel } from "./EmprestimoModel"
import { PedidoModel } from "./PedidoModel"
import { Situacao } from "./Situacao"
export class OperacaoModel extends AbstractEntity {
    status!:AprovacaoModel
    pedido!:PedidoModel
    emitente!:String
    emprestimo!:EmprestmoModel
    dtPgto!:Date
    destino!:Destino
    vencimento!:Date
    situacao!:Situacao
    observacao!:String
}