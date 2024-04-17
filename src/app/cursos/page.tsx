import React, { Suspense } from 'react';
import ProdutosRecentes from '@/app/Parts/cursos/produtosRecentes';
import ProdutosTags from '@/app/Parts/cursos/produtosTags';
import ProdutosPesquisa from '@/app/Parts/cursos/produtosPesquisa';
import ListData from '@/app/Parts/cursos/listData';
import Pagination from '@/app/Parts/Utils/Pagination';

export default function Page() {
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="md:w-1/3 lg:w-1/4 px-4  md:block">
                            <aside>
                                <ProdutosPesquisa />
                                <ProdutosRecentes />
                                <ProdutosTags />
                            </aside>
                        </div>
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            <Suspense fallback={<>asd</>}>
                                <ListData />
                            </Suspense>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
