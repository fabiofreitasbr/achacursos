import ProductHighlight from "@/app/Parts/Components/ProductHighlight"
import axios from "axios";
import { Suspense } from "react";
import { LoadingCursos } from "@/app/Parts/Utils/loading";
import Link from "next/link";

async function GetData() {
    const res = await axios.get(process.env.local_api + "cursos/recentes");
    if (!res.status) { throw new Error('Houve um erro ao tentar buscar os dados'); }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                res.data.map((curso: any) => (
                    <ProductHighlight key={curso.id} content={curso} />
                ))
            }
        </div>
    )
}

function Principais() {
    return (
        <section className="my-8" id="destaque-principais">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="bg-gray-100 py-3 px-6 my-3 rounded-xl sm:rounded-full uppercase font-semibold text-orange">
                        <div className="flex flex-col sm:flex-row items-center text-sm lg:text-base text-center">
                            <Link href="/cursos" className="py-1 sm:py-0 px-4">CURSOS ONLINE</Link>
                            <hr className="h-[1px] w-full sm:w-[1px] sm:h-6 my-1 sm:my-0 bg-gray-300 border-gray-300 border border-solid rounded-full" />
                            <Link href="/presenciais" className="py-1 sm:py-0 px-4">PRESENCIAL</Link>
                            <hr className="h-[1px] w-full sm:w-[1px] sm:h-6 my-1 sm:my-0 bg-gray-300 border-gray-300 border border-solid rounded-full" />
                            <Link href="/ebooks" className="py-1 sm:py-0 px-4">E-BOOK</Link>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<LoadingCursos />}>
                    <GetData />
                </Suspense>
                <div className="w-full">
                    <Link href="/cursos">
                        <button type="button" className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-lg mx-auto uppercase">VER MAIS</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default Principais;