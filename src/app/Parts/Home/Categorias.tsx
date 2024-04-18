import Link from "next/link";

function Categorias() {
    return (
        <section className="my-8" id="categorias">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/cursos" className="block"><div className="bg-black bg-cover h-36 sm:h-64 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white  uppercase text-lg sm:text-2xl" style={{ backgroundImage: "url(/img/categoria-1.png);" }}>Cursos Online</div></Link>
                    <Link href="/ebooks" className="block"><div className="bg-black bg-cover h-36 sm:h-64 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white  uppercase text-lg sm:text-2xl" style={{ backgroundImage: "url(/img/categoria-2.png);" }}>E-books</div></Link>
                    <Link href="/presenciais" className="block"><div className="bg-black bg-cover h-36 sm:h-64 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white  uppercase text-lg sm:text-2xl" style={{ backgroundImage: "url(/img/categoria-3.png);" }}>Presenciais</div></Link>
                    <Link href="/faculdade" className="block"><div className="bg-black bg-cover h-36 sm:h-64 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white  uppercase text-lg sm:text-2xl" style={{ backgroundImage: "url(/img/categoria-4.png);" }}>Faculdade</div></Link>
                </div>
            </div>
        </section>
    );
}
export default Categorias