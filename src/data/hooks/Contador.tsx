import { useCallback, useEffect, useState } from "react"

export default function Contador() {
    const[valor, setValor] = useState(0)
    const[multi10, setMulti10] = useState(0)
    const[delta, setDelta] = useState(0)
    
    // Quando a tela for a primeira vez - OnInit
    // useEffect(() => {
    //     console.log('Executou o useEffect...')
    // }, [])

    // Callback é criada apenas uma vez, na inicialização
    const calcularValorMulti10 = useCallback((valor: number) =>  {
        return valor *10
    }, [])

    // Função é criada toda vez que valor muda
    // const calcularValorMulti10 = useCallback(() =>  {
    //     return valor *10
    // }, [valor])


    useEffect(() => {
        const multi10 = calcularValorMulti10(valor)
        setMulti10(multi10)
    }, [valor, calcularValorMulti10])


    return(
        <div className="flex flex-col items-center gap-5">
           <span className="text-5xl">{valor}</span>
           <span className="text-3xl text-zinc-500">{multi10}</span>
           <span className="text-3xl text-zinc-500">{delta}</span>
           <div className="flex gap-5">
                <button 
                    className="botao" 
                    onClick={() => setValor(valor - delta)}
                >-</button>
                <button 
                    className="botao" 
                    onClick={() => setValor(valorAtual => valorAtual + delta)}
                >+</button>
           </div>
           <input
                className="bg-zinc-900 px-2" 
                type="number"  
                value={delta} 
                onChange={e => setDelta(+e.target.value)}/>
        </div>
    )
}