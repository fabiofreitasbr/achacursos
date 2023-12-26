import Image from 'next/image'

export default function ProductRecents() {
    return (
        <>
            <div className="w-full py-2">
                <a href="">
                    <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                        <div className="w-1/3 bg-center bg-cover" style={{ backgroundImage: "url(https://www.redeconomia.com.br/wp-content/uploads/2022/06/image00001.jpeg);" }}>
                        </div>
                        <div className="w-2/3 px-4 pt-4 pb-1 uppercase">

                            <h4 className="text-xs text-orange">Estácio de Sá</h4>
                            <h3 className="text-base text-blue-500 hover:text-red-500 font-medium">Desenvolvimento Web</h3>
                            <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                VER MAIS
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}