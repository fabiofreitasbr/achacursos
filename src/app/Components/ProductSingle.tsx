import Image from 'next/image';
import thumbProduct from '../../../../public/img/product-1.jpg';

export default function productSingle(props: any) {
    return (
        <>
            <div className="md:flex justify-between">
                <div>
                    <h1 className="mt-1 text-3xl font-semibold text-blue-500">Desenvolvimento Web</h1>
                    <p className="text-lg font-medium text-gray-500">Estácio de Sá - Maricá/RJ</p>
                    <dl className="my-4 text-xs font-medium flex items-center">
                        <dt className="sr-only">Location</dt>
                        <dd className="flex items-center">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="mr-1 text-blue-500" aria-hidden="true">
                                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                            </svg>
                            Maricá - Rio de Janeiro
                            <div className="mx-2 float-left">
                                <button type="button" className="bg-blue-500 text-white text-xs py-2 px-2 rounded-md">
                                    Ver no mapa
                                </button>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div className="text-left md:text-right flex md:block items-center my-2">
                    <p className="text-sm uppercase font-medium text-gray-500">Está com dúvida?</p>
                    <a href="/contato"><button type="button" className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-2 py-2 px-4 block text-sm mx-auto uppercase">Fale Conosco</button></a>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-2/3">
                    <div className="">
                        <Image src={thumbProduct} alt="" className="w-full h-96 overflow-hidden object-cover rounded-xl" />
                    </div>
                    <div className="py-4 text-base text-gray-500">
                        <h3 className="text-blue-500 my-2 text-2xl md:text-2xl font-open">Sobre o Curso</h3>
                        <p className="py-1">Excelente casa em ótima localização, próximo ao comércio (mercado, padaria, farmácia, horti fruti), praia de Itaipuaçu, condução para Maricá, Niterói e Rio de Janeiro, rua asfaltada e água da Cedae.</p>

                        <p className="py-1">Casa com ótimo acabamento possuindo 3 dormitórios sendo 1 suíte, banheiro social, sala ampla com rebaixamento em gesso, iluminação em led, cozinha americana com parede de revestimento em azulejo, bancada em mármore preto, área de serviço e varanda.</p>

                        <p className="py-1">Lindo quintal gramado com varanda gourmet, churrasqueira com fogão a lenha, forno, banheiro, chuveirão, casa para bujão de gás, espaço para construção de piscina, vagas para carros com pergolado, portão de alumínio.</p>

                        <p className="py-1">Financiamento habitacional podendo incluir mais de uma pessoa para aprovação do crédito imobiliário.</p>
                        <p className="py-1">Agilizamos todo o processo de financiamento dos bancos até a entrega das chaves do imóvel.</p>

                        <p className="py-1">Use seu FGTS.</p>
                        <p className="py-1">Agende uma visita com um de nossos corretores.</p>
                    </div>
                    <div className="py-4 text-base text-gray-500">
                        <h3 className="text-blue-500 my-2 text-2xl md:text-2xl font-open">Vídeo</h3>
                        <iframe className="w-full aspect-video rounded-xl md:rounded-2xl lazyloaded" src="https://www.youtube.com/embed/_X17kCIpZQY" title="YouTube video player"></iframe>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="px-2 pb-6">
                        <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                            <div className="px-6 py-4">
                                <div className="">
                                    <div className="py-3">
                                        <h4 className="text-lg text-orange uppercase">Venda</h4>
                                        <h3 className="text-2xl text-blue-500 font-medium uppercase">R$ 1.365.000,00</h3>
                                        <p className="text-sm my-1 text-blue-500 ">R$ 2.031/m²</p>
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
                                <h3 className="text-blue-500 my-2 text-2xl md:text-2xl font-open">Características</h3>
                                <div className="grid grid-cols-2 text-gray-500 text-base">
                                    <div className="py-1">Água</div>
                                    <div className="py-1">Banheiro de empregada</div>
                                    <div className="py-1">Churrasqueira</div>
                                    <div className="py-1">Copa</div>
                                    <div className="py-1">Cozinha</div>
                                    <div className="py-1">Despensa</div>
                                    <div className="py-1">Em condomínio fechado</div>
                                    <div className="py-1">Energia elétrica</div>
                                    <div className="py-1">Esgoto</div>
                                    <div className="py-1">Lavabo</div>
                                    <div className="py-1">Lavanderia</div>
                                    <div className="py-1">Pavimentação</div>
                                    <div className="py-1">Piscina</div>
                                    <div className="py-1">Porcelanato</div>
                                    <div className="py-1">Varanda</div>
                                    <div className="py-1">Campo de futebol</div>
                                    <div className="py-1">Portão eletrônico</div>
                                    <div className="py-1">Portaria 24h</div>
                                    <div className="py-1">Salão de festas</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}