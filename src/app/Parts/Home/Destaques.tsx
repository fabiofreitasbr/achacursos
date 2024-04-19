import ProductList from "@/app/Parts/Components/ProductList";
import axios from "axios";
import { Suspense } from "react";
import LoadingCursos from "../Utils/loading";

async function GetData() {
    const res = await axios.get(process.env.local_api + "cursos/recentes");
    if (!res.status) { throw new Error('Houve um erro ao tentar buscar os dados'); }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {
                res.data.map((curso: any) => (
                    <ProductList key={curso.id} content={curso} />
                ))
            }
        </div>
    )
}

function Destaques() {
    return (
        <section className="my-8" id="destasque-cursos">
            <div className="container mx-auto px-4">
                <div className="px-2 my-2 flex flex-col lg:flex-row items-center">
                    <h2 className="text-blue-500 hover:text-red-500 text-2xl md:text-2xl  ">Todos os Cursos</h2>
                    <div className="flex text-sm md:text-base my-2 lg:my-0 mx-4">
                        <a href="" className="py-2 mx-4 text-red-700 text-center font-medium"><span>Mais Procurados</span></a>
                        <a href="" className="py-2 mx-4 text-red-700 text-center font-medium"><span>Mais Recentes</span></a>
                        <a href="" className="py-2 mx-4 text-red-700 text-center font-medium"><span>Melhores Preços</span></a>
                    </div>
                    <a href="">
                        <button type="button" className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full py-1 px-8 text-base mx-4 uppercase">VER TODOS</button>
                    </a>
                </div>
                <Suspense fallback={<LoadingCursos />}>
                    <GetData />
                </Suspense>
                <div className="w-full">
                    <a href="">
                        <button type="button" className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-lg mx-auto uppercase">VER MAIS</button>
                    </a>
                </div>
            </div>
        </section>
    );
}
export default Destaques;