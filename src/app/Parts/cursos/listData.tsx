
import ProductList from '@/app/Components/ProductList';
import PaginationElement from '../Utils/Pagination';
import ContentArtigos from '../dados/contentArquivos';

export default async function ListData({ searchParams, params }: any) {
    const { data } = await ContentArtigos({ params, searchParams });
    const { courses, countTotal, pageCurrent, quantityPerPage } = data;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {
                (courses) ? courses.map((curso: any) => (
                    <ProductList key={curso.id} content={curso} />
                )) : null
            }
            <PaginationElement params={params} countTotal={countTotal} pageCurrent={pageCurrent} quantityPerPage={quantityPerPage} searchParams={searchParams} />
        </div>
    )
}