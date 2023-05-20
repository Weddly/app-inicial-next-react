import useProcessando from "@/data/hooks/useProcessando"
import useStarWars from "@/data/hooks/useStarWars"
import { IconCheck } from "@tabler/icons-react"
import { useState } from "react"

interface PersonagensProps {
    personagens: any[]
    selecionar: (personagem: any) => void
}

export default function Personagens(props: PersonagensProps) {

    return (
        <table className="w-3/5 text-xl opacity-90 rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-zinc-900">
                    <th className="p-2 font-black">Nome</th>
                    <th className="p-2 font-black">Altura</th>
                    <th className="p-2 font-black">Peso</th>
                    <th className="p-2 font-black">Ações</th>
                </tr>
            </thead>
            <tbody>
            {props.personagens.map((p: any, index: number) => (
                <tr key={p.name} className={`
                    text-center
                    ${index % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}
                `}>
                    <td className="p-2">{p.name}</td>
                    <td className="p-2">{p.height}</td>
                    <td className="p-2">{p.mass}</td>
                    <td className="p-2"> 
                        <button className="botao" onClick={() => props.selecionar(p)}>
                            <IconCheck size={20}/>
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}