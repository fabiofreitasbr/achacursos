import ProductSingle from '@/app/Parts/Components/ProductSingle';
import { Params } from '@/app/Parts/Types/searchParams';
import { LoadingSingle } from '@/app/Parts/Utils/loading';
import React, { Suspense } from 'react';

export default async function Page({ params }: { params: Promise<Params> }) {
    return (
        <>
            <Suspense fallback={<LoadingSingle />}>
                <ProductSingle params={params} />
            </Suspense>
        </>
    )
}
