import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong, faBullhorn, faCode, faMobile, faPaintBrush, faPlay } from '@fortawesome/free-solid-svg-icons';



export default function Page() {
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="">
                        <div className=" border border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                            <a href="https://www.agenciakls.com.br/" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                                <FontAwesomeIcon className="w-2.5 h-2.5 mr-1.5 text-xs" icon={faBullhorn} />
                                Publicidade
                            </a>
                            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Publicidade e Produção</h1>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Divulgue sua empresa no digital e aumente suas vendas acelerando o crescimento do seu negócio de forma exponencial.</p>
                            <a href="https://www.agenciakls.com.br/" target="_blank">
                                <button className="py-2 px-4 rounded-md border-blue-500 border bg-transparent transition hover:bg-blue-500 hover:text-white uppercase flex justify-center items-center gap-x-2">
                                    Eu quero
                                    <FontAwesomeIcon className="w-3.5 h-3.5 ml-2 text-xs" icon={faArrowRightLong} />
                                </button>
                            </a>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className=" border border-gray-700 rounded-lg p-8 md:p-12">
                                <a href="https://www.agenciakls.com.br/" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                    <FontAwesomeIcon className="w-2.5 h-2.5 mr-1.5 text-xs" icon={faCode} />
                                    Desenvolvimento
                                </a>
                                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Crie seu site hoje mesmo!</h2>
                                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Destaque-se na web com nosso serviço de criação de site. Desenvolvemos soluções personalizadas que impressionam e convertem. Sua presença online de sucesso começa aqui.</p>
                                <a href="https://www.agenciakls.com.br/" target="_blank">
                                    <button className="py-2 px-4 rounded-md border-blue-500 border bg-transparent transition hover:bg-blue-500 hover:text-white uppercase flex justify-center items-center gap-x-2">
                                        Eu quero
                                        <FontAwesomeIcon className="w-3.5 h-3.5 ml-2 text-xs" icon={faArrowRightLong} />
                                    </button>
                                </a>
                            </div>
                            <div className=" border border-gray-700 rounded-lg p-8 md:p-12">
                                <a href="https://www.agenciakls.com.br/" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                                    <FontAwesomeIcon className="w-2.5 h-2.5 mr-1.5 text-xs" icon={faPaintBrush} />
                                    Design
                                </a>
                                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Produção de Artes </h2>
                                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Transforme sua visão em realidade com nosso serviço de artes gráficas. Design personalizado que comunica sua mensagem de forma impactante. Inspire-se e destaque-se no mercado.</p>
                                <a href="https://www.agenciakls.com.br/" target="_blank">
                                    <button className="py-2 px-4 rounded-md border-blue-500 border bg-transparent transition hover:bg-blue-500 hover:text-white uppercase flex justify-center items-center gap-x-2">
                                        Eu quero
                                        <FontAwesomeIcon className="w-3.5 h-3.5 ml-2 text-xs" icon={faArrowRightLong} />
                                    </button>
                                </a>
                            </div>
                        </div>
                        
                        <div className=" border border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                            <a href="https://www.agenciakls.com.br/" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                                <FontAwesomeIcon className="w-2.5 h-2.5 mr-1.5 text-xs" icon={faBullhorn} />
                                Publicidade
                            </a>
                            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Fotografia e Filmagem</h1>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Registramos momentos inesquecíveis com paixão e expertise. Nosso serviço de fotografia e filmagem captura a essência de cada momento, transformando ocasiões em lembranças eternas.</p>
                            <a href="https://www.agenciakls.com.br/" target="_blank">
                                <button className="py-2 px-4 rounded-md border-blue-500 border bg-transparent transition hover:bg-blue-500 hover:text-white uppercase flex justify-center items-center gap-x-2">
                                    Eu quero
                                    <FontAwesomeIcon className="w-3.5 h-3.5 ml-2 text-xs" icon={faArrowRightLong} />
                                </button>
                            </a>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className=" border border-gray-700 rounded-lg p-8 md:p-12">
                                <a href="https://www.agenciakls.com.br/" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                    <FontAwesomeIcon className="w-2.5 h-2.5 mr-1.5 text-xs" icon={faMobile} />
                                    Redes
                                </a>
                                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Mídia Social</h2>
                                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Alcance o público certo e impulsione sua presença online com nosso serviço de mídia social. Estratégias eficazes, conteúdo envolvente e crescimento contínuo para sua marca. Sucesso nas redes sociais garantido.</p>
                                <a href="https://www.agenciakls.com.br/" target="_blank">
                                    <button className="py-2 px-4 rounded-md border-blue-500 border bg-transparent transition hover:bg-blue-500 hover:text-white uppercase flex justify-center items-center gap-x-2">
                                        Eu quero
                                        <FontAwesomeIcon className="w-3.5 h-3.5 ml-2 text-xs" icon={faArrowRightLong} />
                                    </button>
                                </a>
                            </div>
                            <div className=" border border-gray-700 rounded-lg p-8 md:p-12">
                                <a href="https://www.agenciakls.com.br/" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                                    <FontAwesomeIcon className="w-2.5 h-2.5 mr-1.5 text-xs" icon={faPlay} />
                                    Edição
                                </a>
                                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Edição de Vídeos</h2>
                                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Aprimore sua produção audiovisual com nosso serviço de edição de vídeos. Transformamos suas filmagens em obras-primas cativantes. Conte histórias envolventes e impressione seu público com nossa expertise.</p>
                                <a href="https://www.agenciakls.com.br/" target="_blank">
                                    <button className="py-2 px-4 rounded-md border-blue-500 border bg-transparent transition hover:bg-blue-500 hover:text-white uppercase flex justify-center items-center gap-x-2">
                                        Eu quero
                                        <FontAwesomeIcon className="w-3.5 h-3.5 ml-2 text-xs" icon={faArrowRightLong} />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
