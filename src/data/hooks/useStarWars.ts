import { useCallback, useEffect, useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars() {
    const {processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [personagens, setPersonagens ] = useState<any[]>([])
    const [personagem, setPersonagem ] = useState<any>([])
    const [filmes, setFilmes ] = useState<any[]>([])

    async function chamadaAPI(){
        const resp = await fetch('https://swapi.dev/api/people/')
        const dados = await resp.json()
        setPersonagens(dados.results)
    }

    const obterPersonagem = useCallback(async function() {
        try {
            iniciarProcessamento()
            await chamadaAPI()
        } finally {
            finalizarProcessamento()
        }
    }, [iniciarProcessamento, finalizarProcessamento])

    useEffect(() => {
        obterPersonagem()
    }, [obterPersonagem])

    function selecionarPersonagem(personagem: any) {
        setPersonagem(personagem)
    }

    const obterFilmes = useCallback(async function (personagem: any) {
        if(!personagem?.films?.length) return
        try {
            iniciarProcessamento()
            const reqs = personagem.films.map(async (film: string) => {
                const resp = await fetch(film)
                return resp.json()
            })

            const filmes = await Promise.all(reqs)
            setFilmes(filmes)
        } finally {
            finalizarProcessamento()
        }
    }, [iniciarProcessamento, finalizarProcessamento])

    function voltar() {
        setPersonagem(null);
        setFilmes([]);
    }

    useEffect(() => {
        obterFilmes(personagem)
    }, [obterFilmes, personagem])


    

    return {
        personagens,
        processando,
        selecionarPersonagem,
        filmes,
        voltar
    }
}