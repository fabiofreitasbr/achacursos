import Image from 'next/image'

export default function ProductList(props: any) {
    return (
        <>
            <div className="px-2 py-2">
                <a href={"/curso/" + props.content.slug} className="h-full">
                    <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                        <Image src={"/img/" + props.content.image} width={313} height={320} alt="" className="w-full h-80 overflow-hidden object-cover" />
                        <div className="px-6 py-4 flex justify-between">
                            <div className="uppercase text-black">
                                <div className="pb-4">
                                    <h4 className="text-sm text-orange">{props.content.subtitle}</h4>
                                    <h3 className="text-lg text-blue-500 font-medium">{props.content.title}</h3>
                                </div>
                                <div>
                                    <h4 className="text-sm text-orange"><strong className="text-red-700">{props.content.category.title}</strong></h4>
                                    <h3 className="text-lg text-blue-500 font-medium">R$ {props.content.price},00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}