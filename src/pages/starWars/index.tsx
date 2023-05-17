import Background from "@/components/starWars/Background";
import Personagens from "@/components/starWars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const {personagens, obterPersonagem, processando } = useStarWars()


    return (
        <div className="flex flex-col justify-center items-center h-screen">
            
            <Background />
            {processando ? (
                <div>Processando...</div>
            ) : personagens.length > 0 ? (
                <Personagens personagens={personagens} />
            ) : (
                <div>Nenhum personagem encontrado</div>
            )}
            <button onClick={obterPersonagem} 
                    className="bg-blue-500 p-2 mt-5">
                        Obter
            </button>
        </div>
    )
}