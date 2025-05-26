
import ProductList from '@/app/Parts/Components/ProductList';
import PaginationElement from '@/app/Parts/Utils/Pagination';
import ContentArtigos from '@/app/Parts/dados/contentArquivos';
import { SearchParamsInterface } from '../Types/searchParams';

export default async function ListData({params, searchParams} : SearchParamsInterface) {
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