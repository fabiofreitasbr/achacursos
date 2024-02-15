
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import ImgLogo from "../../../public/img/logo.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 py-2 md:py-8" id="rodape">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-16">
                        <div className="md:block flex justify-center md:flex-auto  col-span-2 md:col-span-1">
                            <Image src={ImgLogo} alt="" />
                            <div className="hidden md:block">
                                <h3 className=" py-3 font-bold text-red-700 uppercase">Sobre</h3>
                                <p className="">
                                    Acha Cursos é o maior site de busca de cursos com as melhores condições de mercado para você se profissionalizar no mercado de trabalho.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="py-3 font-bold text-red-700">LINKS IMPORTANTES</h3>
                            <ul className="">
                                <li className="py-1"><a href="" className="text-blue-500 hover:text-red-500">Home</a></li>
                                <li className="py-1"><a href="" className="text-blue-500 hover:text-red-500">Cursos Online</a></li>
                                <li className="py-1"><a href="" className="text-blue-500 hover:text-red-500">E-books</a></li>
                                <li className="py-1"><a href="" className="text-blue-500 hover:text-red-500">Presenciais</a></li>
                                <li className="py-1"><a href="" className="text-blue-500 hover:text-red-500">Faculdade</a></li>
                                <li className="py-1"><a href="" className="text-blue-500 hover:text-red-500">Gratuitos</a></li>
                                <li className="py-1"><a href="" className="text-blue-500 hover:text-red-500">Por Categoria</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="py-3 font-bold text-red-700">REDES SOCIAIS</h3>
                            <div className="font-bold py-2 bg-pink md:text-lg flex text-red-700 gap-5">
                                <div>
                                    <a href="">
                                        <FontAwesomeIcon className='h-5 md:h-7 text-blue-500 hover:text-red-500' icon={faFacebookSquare} />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <FontAwesomeIcon className='h-5 md:h-7 text-blue-500 hover:text-red-500' icon={faInstagram} />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <FontAwesomeIcon className='h-5 md:h-7 text-blue-500 hover:text-red-500' icon={faYoutube} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
