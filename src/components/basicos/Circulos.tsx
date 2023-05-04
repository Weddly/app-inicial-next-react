interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    return (
        <div className={`
            flex justify-center items-center font-black
            text-black text-3xl
            h-64 w-64 bg-cyan-500 
            ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}
        `}>
           {props.texto} 
        </div>

    )
}