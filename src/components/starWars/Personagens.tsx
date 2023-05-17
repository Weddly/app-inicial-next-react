import useProcessando from "@/data/hooks/useProcessando"
import useStarWars from "@/data/hooks/useStarWars"
import { useState } from "react"

interface PersonagensProps {
    personagens: any[]
}

export default function Personagens(props: PersonagensProps) {

    function renderizarPersonagens() {
        return (
        <ul>
            {props.personagens.map((p: any) => (
                <li key={p.name}>{p.name}</li>
            ))}
        </ul>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center bg-zinc-800 rounded-xl p-5">
            <div>{renderizarPersonagens()}</div>
        </div>
    )
}