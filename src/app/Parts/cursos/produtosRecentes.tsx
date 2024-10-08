import { Suspense } from "react";
import { LoadingRecentes } from "@/app/Parts/Utils/loading";
import { ProductRecents } from "@/app/Parts/Components/ProductRecents";

export default function ProdutosRecentes() {
    return (
        <>
            <div className="mb-4 md:mb-10 hidden md:block">
                <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">Mais Recentes</h3>
                <Suspense fallback={<LoadingRecentes />}>
                    <ProductRecents />
                </Suspense>
            </div>
        </>
    )
}