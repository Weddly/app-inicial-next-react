import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "@/utils/Moeda";

export default function CarrinhoItem(props: ItemCarrinho) {

    return(
        <div className="flex items-center rounded-full bg-blue-500 gap-2">
            <span className="w-7 h7 bg-red-700 rounded-full flex justify-center items-center">
                {props.quantidade}
            </span>
            <span>
                {props.produto.nome}
            </span>
            <span className="font-bold pr-2">
                {Moeda.formatar(props.produto.preco * props.quantidade)}
            </span>
            
        </div>
    )
}