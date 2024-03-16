import ProductSingle from '@/app/Components/ProductSingle';
import axios from 'axios';
import React from 'react';

async function getData(paramSlug:any) {
    const res = await axios({ url: "http://localhost:3001/cursossingle", data: { slug: paramSlug }});
    if (!res.status) { throw new Error('Houve um erro ao tentar buscar os dados'); }
    return res.data;
}

export default async function Page({params}) {
    const data = await getData(params.slug);
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    {
                        data ? (<ProductSingle content={data} />) : null
                    }
                </div>
            </section>
        </main>
    )
}
