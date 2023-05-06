import Pergunta from "./Pergunta";

export default function Faq(){
    return(
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta texto="O que o pato disse para a pata?" resposta="Vem Quá!" />
            <Pergunta texto="Por que o menino estava falando ao telefone deitado?" resposta="Para não cair a ligação." />
            <Pergunta texto="Qual é a fórmula da água benta?" resposta="H Deus O!" />
            <Pergunta texto="Qual é a cidade brasileira que não tem táxi?" resposta="Uberlândia!" />
        </div>
    )
}