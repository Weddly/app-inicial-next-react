import { useState } from "react";
import If from "./If";
import { IconCaretDown, IconCaretUp } from "@tabler/icons-react";
import IfElse from "./IfElse";

interface PerguntaProps{
    texto: string
    resposta: string
}

export default function Pergunta(props: PerguntaProps) {
    const[aberta, setAberta] = useState<boolean>(false)


    return (
        <div className={`border border-zinc-600 rounded-md overflow-hidden
        `}>
            <div className="bg-zinc-800 p-5  cursor-pointer select-none flex justify-between"
                 onClick={() => setAberta(!aberta)}
            >
                <span>{props.texto}</span>

                <IfElse teste={aberta}>
                    <IconCaretUp />
                    <IconCaretDown />
                </IfElse>

                {/* {aberta? <IconCaretUp /> : <IconCaretDown />} */}
                
            </div>

            <If teste={aberta}>
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
