import Image from 'next/image'

export default function Page() {
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                        <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: "url('../img/ensaio/img-01.png')"}}>
                            <div className="absolute bottom-0 p-2">asd</div>
                        </div>
                        <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: "url('../img/ensaio/img-02.png')"}}>
                            <div className="absolute bottom-0 p-2">asd</div>
                        </div>
                        <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: "url('../img/ensaio/img-03.png')"}}>
                            <div className="absolute bottom-0 p-2">asd</div>
                        </div>
                        <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: "url('../img/ensaio/img-04.png')"}}>
                            <div className="absolute bottom-0 p-2">asd</div>
                        </div>
                        <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: "url('../img/ensaio/img-05.png')"}}>
                            <div className="absolute bottom-0 p-2">asd</div>
                        </div>
                        <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: "url('../img/ensaio/img-06.png')"}}>
                            <div className="absolute bottom-0 p-2">asd</div>
                        </div>
                        <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: "url('../img/ensaio/img-07.png')"}}>
                            <div className="absolute bottom-0 p-2">asd</div>
                        </div>
                        <div className="h-96 bg-cover bg-center relative" style={{backgroundImage: "url('../img/ensaio/img-08.png')"}}>
                            <div className="absolute bottom-0 p-2">asd</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
