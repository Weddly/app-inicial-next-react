import Image from "next/image";
import { useState } from "react";

export default function ImagemAleatoria() {
    const url = 'https://source.unsplash.com/featured/'
    // let pesquisa: string = '';
    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const [tamanho, alterarTamanho] = useState<number>(300)

    // function urlImagem(){
    //     return `${url}${pesquisa}`
    // }

    function renderizarBotao(valor: string) {
        return(
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                    alterarPesquisa(valor)
                    console.log(valor)
                }}>
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            
            <div className="flex justify-center gap-7 mb-5">
                <span>{pesquisa}</span>
                <span>{tamanho}</span>
            </div>
            {/* <Image src={urlImagem()} width={300} height={300} alt="Imagem" /> */}
            <Image src={`${url}${tamanho}x${tamanho}?${pesquisa}`}
                          width={300}
                          height={300}
                          alt="Imagem"
                          className="rounded-md" />
            <div className="flex justify-between gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')} 
                {renderizarBotao('person')}
            </div>
            <div>
                <input 
                    type="number"
                    value={tamanho}
                    className="bg-zinc-800 p-2 rounded-md outline-none w-full"
                    onChange={e => {
                        console.log(e.target.value)
                        alterarTamanho(+e.target.value)
                    }} />
            </div>
        </div>
    )
}