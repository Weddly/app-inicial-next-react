import Image from "next/image";

export default function Background() {
    return(
        <Image src={'https://www.pixelstalk.net/wp-content/uploads/2016/06/Star-Wars-Backgrounds.jpg'} 
        alt="swbg"
        fill
        className="-z-50 opacity-25" />
    )
}