interface IfProps{
    teste: boolean
    children: any
}

export default function IfElse(props: IfProps){
    if (props.teste){
        return props.children[0]
    } else {
        return props.children[1]
    }
}