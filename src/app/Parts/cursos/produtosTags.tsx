export default function ProdutosTags() {
    return (
        <div className="mb-2 md:mb-10">
            <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">Tags</h3>
            <div className="my-2 flex flex-wrap md:block">
                <div>
                    <a href="https://www.redeconomia.com.br/dicas-receitas/bebidas/">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Bebidas
                        </span>
                    </a>
                </div>
                <div>
                    <a href="https://www.redeconomia.com.br/dicas-receitas/comidas/">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Comidas
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}