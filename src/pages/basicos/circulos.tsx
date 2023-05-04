import Circulo from "@/components/basicos/Circulos";

export default function PaginaCirculos() {
    return (
        <div className="flex bg-red-600 h-screen justify-around items-center">
            <Circulo texto ="Círculo #1"></Circulo>
            <Circulo texto ="Círculo #2"></Circulo>
            <Circulo texto ="Círculo #3" quasePerfeito={true}></Circulo>
            <Circulo texto ="Círculo #4"></Circulo>
        </div>
    )
}