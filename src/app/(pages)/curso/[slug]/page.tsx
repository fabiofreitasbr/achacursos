import ProductSingle, { slugInterface } from '@/app/Parts/Components/ProductSingle';
import { LoadingSingle } from '@/app/Parts/Utils/loading';
import React, { Suspense } from 'react';

export default async function Page({params, searchParams}: slugInterface) {
    return (
        <>
            <Suspense fallback={<LoadingSingle />}>
                <ProductSingle params={params} searchParams={searchParams} />
            </Suspense>
        </>
    )
}
