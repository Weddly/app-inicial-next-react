import { useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars() {
    const {processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [personagens, setPersonagens ] = useState<any>([])

    async function chamadaAPI(){
        const resp = await fetch('https://swapi.dev/api/people/')
        const dados = await resp.json()
        setPersonagens(dados.results)
    }

    async function obterPersonagem() {

        try {
            iniciarProcessamento()
            await chamadaAPI()
        } finally {
            finalizarProcessamento()
        }
    }

    return {
        personagens,
        obterPersonagem,
        processando
    }
}