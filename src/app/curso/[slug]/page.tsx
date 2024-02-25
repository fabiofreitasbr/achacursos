import ProductSingle from '@/app/Components/ProductSingle';
import React from 'react';

async function getData() {
    const res = await fetch('http://localhost:3001/cursos', { next: { revalidate: 300 } });
    if (!res.ok) { throw new Error('Houve algum erro ao buscar os dados'); }
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    {
                        data ? (<productSingle />) : null
                    }
                </div>
            </section>
        </main>
    )
}
