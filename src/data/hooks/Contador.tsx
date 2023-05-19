import { useState } from "react"

export default function Contador() {
    const[valor, setValor] = useState(0)
    const multi10 = valor * 10

    return(
        <div className="flex flex-col items-center gap-5">
           <span className="text-5xl">{valor}</span>
           <span className="text-3xl text-zinc-500">{multi10}</span>
           <div className="flex gap-5">
                <button 
                    className="botao" 
                    onClick={() => setValor(valor - 1)}
                >-1</button>
                <button 
                    className="botao" 
                    onClick={() => setValor(valorAtual => valorAtual + 1)}
                >+1</button>
           </div>
        </div>
    )
}