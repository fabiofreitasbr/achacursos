
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import ImgLogo from "../../../../public/img/logo.png"
import Image from 'next/image';
import Link from 'next/link';

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
                                <li className="py-1"><Link href="/cursos" className="text-blue-500 hover:text-red-500">Cursos Online</Link></li>
                                <li className="py-1"><Link href="/ebooks" className="text-blue-500 hover:text-red-500">E-books</Link></li>
                                <li className="py-1"><Link href="/presenciais" className="text-blue-500 hover:text-red-500">Presenciais</Link></li>
                                <li className="py-1"><Link href="/faculdade" className="text-blue-500 hover:text-red-500">Faculdade</Link></li>
                                <li className="py-1"><Link href="/profissao" className="text-blue-500 hover:text-red-500">Por Profissão</Link></li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="py-3 font-bold text-red-700">REDES SOCIAIS</h3>
                            <div className="font-bold py-2 bg-pink md:text-lg flex text-red-700 gap-5">
                                <div>
                                    <Link href="">
                                        <FontAwesomeIcon className='h-5 md:h-7 text-blue-500 hover:text-red-500' icon={faFacebookSquare} />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="">
                                        <FontAwesomeIcon className='h-5 md:h-7 text-blue-500 hover:text-red-500' icon={faInstagram} />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="">
                                        <FontAwesomeIcon className='h-5 md:h-7 text-blue-500 hover:text-red-500' icon={faYoutube} />
                                    </Link>
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
