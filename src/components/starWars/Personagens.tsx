import useProcessando from "@/data/hooks/useProcessando"
import useStarWars from "@/data/hooks/useStarWars"
import { useState } from "react"

export default function Personagens() {
    const {personagens, obterPersonagem, processando } = useStarWars()
   

    function renderizarPersonagens() {
        return (
        <ul>
            {personagens.map((p: any) => (
                <li key={p.name}>{p.name}</li>
            ))}
        </ul>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {processando ? (
                <div>Processando...</div>
            ) : personagens.length > 0 ? (
                renderizarPersonagens()
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