import axios from 'axios';
import { Params } from '../Types/searchParams';
import NotFoundComponent from '../estrutura/notFoundComponent';
import ProductSingleContent from './ProductSingleContent';

export default async function ProductSingle({ params }: { params: Params }) {
    if (!params || !params.slug) {
        return <NotFoundComponent />;
    }
    const slug = params.slug;

    try {
        const res = await axios.get(`${process.env.local_api}cursos/single`, {
            params: { slug: slug || "" },
        });
        const data = res.data;

        return (
            <>
                {data ? (
                    <div className="container mx-auto px-4">
                        <ProductSingleContent data={data} />
                    </div>
                ) : (
                    <NotFoundComponent />
                )}
            </>
        );
    } catch (error) {
        console.error("Erro ao buscar curso:", error);
        return <NotFoundComponent />;
    }
}