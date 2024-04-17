
import ProductList from '@/app/Components/ProductList';
import axios from 'axios';

export default async function ListData() {
    const res = await axios({ url: "http://localhost:3001/cursos" });
    if (!res.status) { throw new Error('Houve um erro ao tentar buscar os dados'); }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {
                res.data.map((curso: any) => (
                    <ProductList key={curso.id} content={curso} />
                ))
            }
        </div>
    )
}