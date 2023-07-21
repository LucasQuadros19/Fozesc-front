import { AbstractEntity } from "./AbstractEntity"
import { Forma } from "./Forma"
export class PedidoModel extends AbstractEntity {
    formaPaga!:Forma
    valorDoc!:Number
    juros!:Number
    valorLiquido!:Number
    total!: Number
}