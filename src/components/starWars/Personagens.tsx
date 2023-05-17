import useProcessando from "@/data/hooks/useProcessando"
import { useState } from "react"

export default function Personagens() {
    const {processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()


    async function simularChamadaAPI(){

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1)
            }, 6000)
        })
    }

    async function obterPersonagem() {

        try {
            iniciarProcessamento()
            await simularChamadaAPI()
        } finally {
            finalizarProcessamento()
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {processando ? (
                <div>Processando...</div>
            ): (
                <h1>Personagens</h1>
            )} 
            <button onClick={obterPersonagem} className="bg-blue-500 p-2 mt-5">Obter</button>
        </div>
    )
}