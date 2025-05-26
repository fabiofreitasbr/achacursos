import ProductSingle from '@/app/Parts/Components/ProductSingle';
import { SearchParamsInterface } from '@/app/Parts/Types/searchParams';
import { LoadingSingle } from '@/app/Parts/Utils/loading';
import React, { Suspense } from 'react';

export default async function Page({params, searchParams}: SearchParamsInterface) {
    return (
        <>
            <Suspense fallback={<LoadingSingle />}>
                <ProductSingle params={params} searchParams={searchParams} />
            </Suspense>
        </>
    )
}
