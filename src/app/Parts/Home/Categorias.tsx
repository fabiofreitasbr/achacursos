import Link from "next/link";

export default function Categorias() {
    return (
        <section className="my-8" id="categorias">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/cursos" className="block"><div className="bg-black bg-cover bg-categoria-1 h-36 sm:h-64 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white  uppercase text-lg sm:text-2xl">Cursos Online</div></Link>
                    <Link href="/ebooks" className="block"><div className="bg-black bg-cover bg-categoria-2 h-36 sm:h-64 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white  uppercase text-lg sm:text-2xl">E-books</div></Link>
                    <Link href="/presenciais" className="block"><div className="bg-black bg-cover bg-categoria-3 h-36 sm:h-64 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white  uppercase text-lg sm:text-2xl">Presenciais</div></Link>
                    <Link href="/faculdade" className="block"><div className="bg-black bg-cover bg-categoria-4 h-36 sm:h-64 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white  uppercase text-lg sm:text-2xl">Faculdade</div></Link>
                </div>
            </div>
        </section>
    );
}