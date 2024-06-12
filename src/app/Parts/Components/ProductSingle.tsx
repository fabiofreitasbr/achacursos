import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

export default function ProductSingle(props: any) {
    const curso = props.content;
    console.log(curso);
    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-blue-500">{curso.title}</h1>
                    <p className="text-sm lg:text-base xl:text-lg font-medium text-gray-500">{curso.subtitle}</p>
                    <dl className="my-4 text-xs font-medium flex items-center">
                        <dt className="sr-only">Location</dt>
                        <dd className="flex items-center">
                            <FontAwesomeIcon icon={faTag} className='h-4 w-4 text-xs mr-1 text-blue-500' />
                            {curso.category.title}
                            <div className="mx-2 float-left">
                                <button type="button" className="bg-blue-500 text-white text-xs py-2 px-2 rounded-md">
                                    Conhecer o curso
                                </button>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div className="text-right block items-center my-2">
                    <p className="text-xs md:text-sm uppercase font-medium text-gray-500 text-center">
                        <span className="hidden sm:block">Está com dúvida?</span>
                        <span className="block sm:hidden">Dúvidas?</span>
                    </p>
                    <a href="/contato">
                        <button type="button" className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-2 py-2 px-4 block text-xs md:text-sm mx-auto uppercase">
                            <span className="hidden sm:block">Fale Conosco</span>
                            <span className="block sm:hidden">Contato</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-2/3">
                    <div className="">
                        <Image src={"/img/" + curso.image} width={1080} height={500} alt="" className="w-full aspect-[16/8] overflow-hidden object-cover rounded-xl" />
                    </div>
                    <div className="py-4 text-base text-gray-500">
                        <h3 className="text-blue-500 my-2 text-2xl md:text-2xl font-open">Sobre o Curso</h3>
                        {curso.description}
                    </div>
                    {
                        curso.video ? (
                            <div className="py-4 text-base text-gray-500">
                                <h3 className="text-blue-500 my-2 text-2xl md:text-2xl font-open">Vídeo</h3>
                                <iframe className="w-full aspect-video rounded-xl md:rounded-2xl lazyloaded" src={"https://www.youtube.com/embed/" + curso.video} title="YouTube video player"></iframe>
                            </div>
                        ) : null
                    }
                </div>
                <div className="w-full md:w-1/3">
                    <div className="px-2 pb-6">
                        <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                            <div className="px-6 py-4">
                                <div className="">
                                    <div className="py-3">
                                        <h4 className="text-lg text-orange uppercase">{curso.title}</h4>
                                        <p className="text-sm my-1 text-blue-500 "><del>R$ {curso.price}</del></p>
                                        <h3 className="text-2xl text-blue-500 font-medium uppercase">R$ {curso.price_discount}</h3>
                                    </div>
                                </div>
                                <button type="button" className="bg-red-700 hover:bg-red-800 text-gray-100 font-medium rounded-full my-4 py-2 px-4 block text-lg mx-auto uppercase w-4/5">Conhecer o Curso</button>
                                <button type="button" className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-2 px-4 block text-lg mx-auto uppercase w-4/5">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 pb-6">
                        <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                            <div className="px-6 py-4">
                                <h3 className="text-blue-500 my-2 text-2xl md:text-2xl font-open">O que você vai aprender?</h3>
                                <div className="grid grid-cols-2 text-gray-500 text-sm">
                                    <div className="py-1">Água</div>
                                    <div className="py-1">Banheiro de empregada</div>
                                    <div className="py-1">Churrasqueira</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}