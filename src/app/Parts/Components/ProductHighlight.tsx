import Image from "next/image"

export default function ProductHighlight(props: any) {
    return (
        <a href={"/curso/" + props.content.slug}>
            <div className="h-80 flex items-end relative group overflow-hidden">
                <Image src={"/img/" + props.content.image} width={368} height={320} className="absolute top-0 w-full h-full object-cover z-10 group-hover:scale-110 transition" alt="" />
                <div className="z-20 text-white px-4 py-3 font-bold text-xl">
                    <h4>{props.content.title}</h4>
                    <h5>R$ {props.content.price}</h5>
                </div>
            </div>
        </a>
    )
}