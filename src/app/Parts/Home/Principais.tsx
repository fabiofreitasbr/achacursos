function Principais() {
    return (
        <section className="my-8" id="destaque-principais">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="bg-gray-100 py-3 px-6 my-3 rounded-xl sm:rounded-full uppercase font-semibold text-orange">
                        <div className="flex flex-col sm:flex-row items-center text-sm lg:text-base text-center">
                            <a href="" className="py-1 sm:py-0 px-4">
                                CURSOS ONLINE
                            </a>
                            <hr className="h-[1px] w-full sm:w-[1px] sm:h-6 my-1 sm:my-0 bg-gray-300 border-gray-300 border border-solid rounded-full" />
                            <a href="" className="py-1 sm:py-0 px-4">
                                PRESENCIAL
                            </a>
                            <hr className="h-[1px] w-full sm:w-[1px] sm:h-6 my-1 sm:my-0 bg-gray-300 border-gray-300 border border-solid rounded-full" />
                            <a href="" className="py-1 sm:py-0 px-4">
                                E-BOOK
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-black bg-cover bg-center h-80 flex items-end" style={{ backgroundImage: "url(img/product-1.jpg);" }}>
                        <div className=" text-white px-4 py-3 font-bold text-xl">
                            <h4>Desenvolvimento Web - RJ</h4>
                            <h5>R$ 150,00 - mensal</h5>
                        </div>
                    </div>
                    <div className="bg-black bg-cover bg-center h-80 flex items-end" style={{ backgroundImage: "url(img/product-2.jpg);" }}>
                        <div className=" text-white px-4 py-3 font-bold text-xl">
                            <h4>Desenvolvimento Web - RJ</h4>
                            <h5>R$ 150,00 - mensal</h5>
                        </div>
                    </div>
                    <div className="bg-black bg-cover bg-center h-80 flex items-end" style={{ backgroundImage: "url(img/product-3.jpg);" }}>
                        <div className=" text-white px-4 py-3 font-bold text-xl">
                            <h4>Desenvolvimento Web - RJ</h4>
                            <h5>R$ 150,00 - mensal</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <a href="">
                        <button type="button" className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-lg mx-auto uppercase">VER MAIS</button>
                    </a>
                </div>
            </div>
        </section>
    );
}
export default Principais