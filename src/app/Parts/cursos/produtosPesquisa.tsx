"use client"
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function ProdutosPesquisa() {
    const searchParams = useSearchParams();
    const textSearch = searchParams.get('s');
    const placeSearch = (textSearch !== null) ? textSearch : "";
    const [search, setSearch] = useState(placeSearch);

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <div className="mb-4 md:mb-10">
            <form action="/pesquisa" method="GET">
                <div className="flex md:block">
                    <h3 className="hidden md:block text-xl my-2 font-medium text-blue-500 uppercase">Pesquisar</h3>
                    <input name="s" value={search} onChange={handleSubmit} type="text" className="w-full py-3 px-4 rounded-l-lg md:rounded-lg text-lg font-medium border text-gray-500 col-span-2" placeholder="DIGITE SUA BUSCA" />
                    <button className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-r-full md:rounded-full md:my-4 py-2 px-10 block text-base uppercase">
                        Pesquisar
                    </button>
                </div>
            </form>
        </div>
    )
}