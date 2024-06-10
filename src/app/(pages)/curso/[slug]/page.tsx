import ProductSingle from '@/app/Parts/Components/ProductSingle';
import axios from 'axios';
import React from 'react';

interface slugInterface {
    params: { slug: string },
    searchParams: object,
}

async function getData({ params, searchParams }: slugInterface) {
    const res = await axios.get(process.env.local_api + "cursos/single", { params: { slug: params.slug } });
    if (!res.status) { throw new Error('Houve um erro ao tentar buscar os dados'); }
    return res.data;
}

export default async function Page({ params, searchParams }: slugInterface) {
    const data = await getData({ params, searchParams });
    return (
        <>
            {
                data ? (<ProductSingle content={data} />) : null
            }
        </>
    )
}
