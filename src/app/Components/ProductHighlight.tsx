import Image from 'next/image'

export default function ProductHighlight(props: any) {
    return (
        <a href={"/curso/" + props.content.slug}>
            <div className="bg-black bg-cover bg-center h-80 flex items-end" style={{ backgroundImage: "url(" + props.content.image + ");" }}>
                <div className=" text-white px-4 py-3 font-bold text-xl">
                    <h4>{props.content.title}</h4>
                    <h5>R$ {props.content.price} - mensal</h5>
                </div>
            </div>
        </a>
    )
}