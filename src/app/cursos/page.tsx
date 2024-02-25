import Image from 'next/image'
import React from 'react';
import ProductRecents from '../Components/ProductRecents';
import ProductList from '../Components/ProductList';

async function getData() {
    const res = await fetch('http://localhost:3001/cursos', { next: { revalidate: 300}});
    if (!res.ok) { throw new Error('Houve um erro ao tentar buscar os dados') }
    return res.json();
}

export default async function Page() {
    const data: any = await getData();
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="md:w-1/3 lg:w-1/4 px-4  md:block">
                            <aside>
                                <div className="mb-4 md:mb-10">
                                    <form action="/" method="GET">
                                        <div className="flex md:block">
                                            <h3 className="hidden md:block text-xl my-2 font-medium text-blue-500 uppercase">
                                                Pesquisar
                                            </h3>
                                            <input name="s" type="text" className="w-full py-3 px-4 rounded-l-lg md:rounded-lg text-lg font-medium border text-gray-500 col-span-2" placeholder="DIGITE SUA BUSCA" />
                                            <button
                                                className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-r-full md:rounded-full md:my-4 py-2 px-10 block text-base uppercase">
                                                Pesquisar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mb-4 md:mb-10 hidden md:block">
                                    <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">
                                        Mais Recentes
                                    </h3>
                                    <ProductRecents />
                                    <ProductRecents />
                                </div>
                                <div className="mb-2 md:mb-10">
                                    <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">
                                        Tags
                                    </h3>
                                    <div className="my-2 flex flex-wrap md:block">
                                        <div>
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/bebidas/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Bebidas
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/comidas/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Comidas
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                                {
                                    data.map((curso: any) => (
                                        <ProductList key={curso.id} content={curso} />
                                    ))
                                }
                            </div>
                            <div className="mx-auto block text-center my-8">
                                <ul className="inline-flex -space-x-px">
                                    <li>
                                        <a className="py-2 px-3 text-white bg-blue-500 border border-gray-300">
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100"
                                            href="/page/2/">
                                            2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100"
                                            href="/page/3/">
                                            3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100"
                                            href="/page/19/">
                                            19
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white rounded-r-lg border border-gray-300 hover:bg-red-100"
                                            href="/page/2/">
                                            Próximo »
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
