
import ProductRecents from '@/app/Components/ProductRecents';

export default function ProdutosRecentes() {
    return (
        <div className="mb-4 md:mb-10 hidden md:block">
            <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">
                Mais Recentes
            </h3>
            <ProductRecents />
            <ProductRecents />
            <ProductRecents />
        </div>
    )
}