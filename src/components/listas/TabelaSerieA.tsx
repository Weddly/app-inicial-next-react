interface TabelaProps {
    times: string[]
}

export default function TabelaSerieA(props: TabelaProps){
    

    // string -> <li>
    // const itens: any[] = []
    // for(let i = 0; i < props.times.length; i++) {
    //     itens.push((
    //         <li key={props.times[i]} className="text-xl list-decimal pt-2">
    //             {props.times[i]}
    //         </li>
    //     ))
    // }

    const itens = props.times.map((time, i) => {
        return (
            <li key={time} 
                className={`text-3xl list-decimal pt-2 
                    ${i % 2 === 0 ? 'text-blue-500' : 'text-yellow-500' }`}>
               {time}
            </li>
        )
    })

    return (
        <ol>
            {itens}
        </ol>
    )
}