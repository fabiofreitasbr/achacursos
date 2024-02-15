import Image from 'next/image'
import thumbProduct from '../../../public/img/product-1.jpg';

export default function ProductList() {
    return (
        <>
            <div className="px-2 py-2">
                <a href="/curso/teste" className="h-full">
                    <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                        <Image src={thumbProduct} alt="" className="w-full h-80 overflow-hidden object-cover" />
                        <div className="px-6 py-4 flex justify-between">
                            <div className="uppercase text-black">
                                <div className="pb-4">
                                    <h4 className="text-sm text-orange">Estácio de Sá</h4>
                                    <h3 className="text-lg text-blue-500 hover:text-red-500 font-medium">Desenvolvimento Web</h3>
                                </div>
                                <div>
                                    <h4 className="text-sm text-orange"><strong className="text-red-700">EAD</strong> - Rio de Janeiro - RJ</h4>
                                    <h3 className="text-lg text-blue-500 hover:text-red-500 font-medium">R$ 150,00 <small className="text-xs text-gray-500">Mensal</small></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}