import { useState } from "react";
import If from "./If";
import { IconCaretDown, IconCaretUp } from "@tabler/icons-react";
import IfElse from "./IfElse";

interface PerguntaProps{
    indice: number
    texto: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {
    const[aberta, setAberta] = useState<boolean>(false)


    return (
        <div className={`border border-zinc-600 rounded-md overflow-hidden
        `}>
            <div className="bg-zinc-800 p-5  cursor-pointer select-none flex justify-between"
                 onClick={() => props.alternarVisibilidade(props.indice)}
            >
                <span>{props.texto}</span>

                <IfElse teste={props.aberta}>
                    <IconCaretUp />
                    <IconCaretDown />
                </IfElse>

                {/* {aberta? <IconCaretUp /> : <IconCaretDown />} */}
                
            </div>

            <If teste={props.aberta}>
                <div className="p-5" >
                    {props.resposta}
                </div>
            </If>

            {/* {aberta && (
                <div className="p-5" >
                    {props.resposta}
                </div>
            )}  */}
            
        </div>
    );
}
