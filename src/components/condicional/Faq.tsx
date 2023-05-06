import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq(){
    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number) {
        if(indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return(
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta aberta={ativo === 0} indice={0} alternarVisibilidade={alternarVisibilidade} texto="O que o pato disse para a pata?" resposta="Vem Quá!" />
            <Pergunta aberta={ativo === 1} indice={1} alternarVisibilidade={alternarVisibilidade} texto="Por que o menino estava falando ao telefone deitado?" resposta="Para não cair a ligação." />
            <Pergunta aberta={ativo === 2} indice={2} alternarVisibilidade={alternarVisibilidade} texto="Qual é a fórmula da água benta?" resposta="H Deus O!" />
            <Pergunta aberta={ativo === 3} indice={3} alternarVisibilidade={alternarVisibilidade} texto="Qual é a cidade brasileira que não tem táxi?" resposta="Uberlândia!" />
        </div>
    )
}