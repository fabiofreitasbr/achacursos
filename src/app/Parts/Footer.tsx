
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMusic, faBullhorn, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faInstagram, faYoutube, faTiktok, faBehance, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-2 md:py-8 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-16">
                    <div className="md:block flex justify-center md:flex-auto  col-span-2 md:col-span-1">
                        <a href="https://www.redeconomia.com.br">
                            <img alt="" data-src="img/logo-new.png" className=" ls-is-cached lazyloaded" src="img/logo-new.png" />
                                <noscript>
                                    <img src="img/logo-new.png" alt="" />
                                </noscript>
                        </a>
                        <div className="hidden md:block">
                            <h3 className=" py-3 font-bold uppercase">Sobre mim</h3>
                            <p className="font-reading text-sm">
                            Desenvolvedor e publicitário, com conhecimento em diversas áreas de tecnologia e comunicação. Abrangendo design, web, fotografia e filmagem a áreas de publicidade, marketing e redes sociais.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="py-3 font-bold uppercase">Meus Links
                        </h3>
                        <div id="menu-principal-footer" className="menu-principal-container">
                            <ul id="footer-nav" className="font-reading">
                                <li className="py-1">
                                    <a href="/"> Início</a>
                                </li>
                                <li className="py-1">
                                    <a href="/sobre"> Sobre mim</a>
                                </li>
                                <li className="py-1">
                                    <a href="/videos"> Vídeos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="py-3 font-bold uppercase">Serviços</h3>
                        <div>
                            <ul id="footer-nav" className="font-reading">
                                <li className="py-1">
                                    <a href="/servicos"> Serviços</a>
                                </li>
                                <li className="py-1">
                                    <a href="/presets"> Presets</a>
                                </li>
                                <li className="py-1">
                                    <a href="/cursos"> Cursos</a>
                                </li>
                                <li className="py-1">
                                    <a href="/ebooks"> E-books</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="py-3 font-bold">REDES SOCIAIS</h3>
                        <div className="font-bold py-2 bg-pink md:text-lg flex text-red-700 gap-5 flex-wrap">
                            <div className="hover:scale-105 transition duration-500">
                                <a href="https://pt-br.facebook.com/fabiofreitasbr" className="text-white hover:text-blue-500" target="_blank">
                                    <FontAwesomeIcon className="h-5 md:h-7" icon={faSquareFacebook} />
                                </a>
                            </div>
                            <div className="hover:scale-105 transition duration-500">
                                <a href="https://www.instagram.com/fabiofreitasbr/" className="text-white hover:text-blue-500" target="_blank">
                                    <FontAwesomeIcon className="h-5 md:h-7" icon={faInstagram} />
                                </a>
                            </div>
                            <div className="hover:scale-105 transition duration-500">
                                <a href="https://www.youtube.com/@fabiofreitasbr" className="text-white hover:text-blue-500" target="_blank">
                                    <FontAwesomeIcon className="h-5 md:h-7" icon={faYoutube} />
                                </a>
                            </div>
                            <div className="hover:scale-105 transition duration-500">
                                <a href="https://www.tiktok.com/@fabiofreitasbr" className="text-white hover:text-blue-500" target="_blank">
                                    <FontAwesomeIcon className="h-5 md:h-7" icon={faTiktok} />
                                </a>
                            </div>
                            <div className="hover:scale-105 transition duration-500">
                                <a href="https://www.twitter.com/ffabiofreitasbr" className="text-white hover:text-blue-500" target="_blank">
                                    <FontAwesomeIcon className="h-5 md:h-7" icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
