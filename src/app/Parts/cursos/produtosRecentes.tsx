import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { LoadingRecentes } from "../Utils/loading";

export async function ListBlogRecentes() {
    const { data } = await axios.get("https://api.achacursos.com.br/cursos/recentes");
    return (
        <div>
            {
                data.map((artigoCurrent: any) => (
                    <div key={artigoCurrent.slug} className="w-full py-2">
                        <Link href={"/cursos/" + artigoCurrent.slug}>
                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                <div className="w-1/3">
                                    <Image className="w-full h-full overflow-hidden object-cover" alt={artigoCurrent.title} width={103} height={108} src={"/img/" + artigoCurrent.image} />
                                </div>
                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                    <h4 className="text-xs text-orange">
                                        {artigoCurrent.title}
                                    </h4>
                                    <h3 className="text-base text-blue-500 hover:text-red-500 font-medium">{artigoCurrent.subtitle}</h3>
                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                        VER MAIS
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default function ProdutosRecentes() {
    return (
        <>
            <div className="mb-4 md:mb-10 hidden md:block">
                <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">Mais Recentes</h3>
                <Suspense fallback={<LoadingRecentes />}>
                    <ListBlogRecentes />
                </Suspense>
            </div>
        </>
    )
}