import Image from 'next/image'

export default function ProductHighlight() {
    return (
        <>
            <a href="">
                <div className="bg-black bg-cover bg-center h-80 flex items-end" style={{ backgroundImage: "url(img/product-1.jpg);" }}>
                    <div className=" text-white px-4 py-3 font-bold text-xl">
                        <h4>Desenvolvimento Web - RJ</h4>
                        <h5>R$ 150,00 - mensal</h5>
                    </div>
                </div>
            </a>
        </>
    )
}