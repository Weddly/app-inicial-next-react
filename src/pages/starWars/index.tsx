import Background from "@/components/starWars/Background";
import Filmes from "@/components/starWars/Filmes";
import Personagens from "@/components/starWars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const {personagens, processando, selecionarPersonagem, filmes, voltar } = useStarWars()

    return (
        <div className="flex flex-col justify-center items-center h-screen relative">
            
            <Background />
            {processando ? (
                <div>Processando...</div>
            ) : filmes.length > 0 ? (
                <Filmes filmes={filmes} voltar={voltar}/>
                ) : personagens.length > 0 ? (
                <Personagens personagens={personagens} 
                    selecionar={selecionarPersonagem}
                />
            ) : (
                <div>Nenhum personagem encontrado</div>
            )}
        </div>
    )
}