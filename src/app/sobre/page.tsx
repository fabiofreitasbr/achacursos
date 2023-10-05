import Image from 'next/image'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMusic, faBullhorn, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faInstagram, faYoutube, faTiktok, faBehance, faTwitter } from '@fortawesome/free-brands-svg-icons';



export default function Page() {
  return (
    <main>
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="block lg:flex lg:flex-row-reverse items-center">
                    <div className="lg:w-1/2 flex justify-content items-center">
                        <img alt="" className="w-2/3 lg:w-1/2 mx-auto rounded-full lazyloaded" src="./img/biography.jpg" />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="text-base text-justify md:text-left md:text-2xl text-zinc-700 font-reading">
                            <h2 className="text-2xl md:text-4xl text-center md:text-left py-4 text-red-700 font-body">Minha História</h2>
                            <div className="py-2">Desenvolvedor e publicitário, com conhecimento em diversas áreas de tecnologia e comunicação. Abrangendo design, web, fotografia e filmagem a áreas de publicidade, marketing e redes sociais.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-8 md:py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="md:grid grid-cols-1 md:grid-cols-4">
                    <div className="py-4 md:py-2">
                        <div className="text-center">
                            <FontAwesomeIcon className="fill-white my-2 h-12 md:h-16 mx-auto" icon={faCamera} />
                            <h3 className="py-2 md:py-4 text-xl md:text-3xl font-medium text-red-700">Publicidade</h3>
                            <h4 className="text-sm md:text-base text-green-700 uppercase">Redes Sociais e Artes </h4>
                        </div>
                    </div>
                    <div className="py-4 md:py-2">
                        <div className="text-center">
                            <FontAwesomeIcon className="fill-white my-2 h-12 md:h-16 mx-auto" icon={faBullhorn} />
                            <h3 className="py-2 md:py-4 text-xl md:text-3xl font-medium text-red-700">Marketing</h3>
                            <h4 className="text-sm md:text-base text-green-700 uppercase">Divulgação e Vendas</h4>
                        </div>
                    </div>
                    <div className="py-4 md:py-2">
                        <div className="text-center">
                            <FontAwesomeIcon className="fill-white my-2 h-12 md:h-16 mx-auto" icon={faCode} />
                            <h3 className="py-2 md:py-4 text-xl md:text-3xl font-medium text-red-700">Programação</h3>
                            <h4 className="text-sm md:text-base text-green-700 uppercase">Desenvolvimento</h4>
                        </div>
                    </div>
                    <div className="py-4 md:py-2">
                        <div className="text-center">
                            <FontAwesomeIcon className="fill-white my-2 h-12 md:h-16 mx-auto" icon={faMusic} />
                            <h3 className="py-2 md:py-4 text-xl md:text-3xl font-medium text-red-700">Música</h3>
                            <h4 className="text-sm md:text-base text-green-700 uppercase">Criação de Projetos</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h3 className="text-center uppercase text-xl md:text-3xl mb-8 font-bold text-red-700">SIGA-NOS NAS REDES SOCIAIS</h3>
                <div className="font-bold py-2 bg-pink md:text-lg flex text-red-700 gap-6 md:gap-12 justify-center">
                    <div className="hover:scale-105 transition duration-500">
                        <a href="https://pt-br.facebook.com/fabiofreitasbr" target="_blank">
                            <FontAwesomeIcon className="fill-white my-2 h-8 md:h-16 mx-auto" icon={faSquareFacebook} />
                        </a>
                    </div>
                    <div className="hover:scale-105 transition duration-500">
                        <a href="https://www.instagram.com/fabiofreitasbr/" target="_blank">
                            <FontAwesomeIcon className="fill-white my-2 h-8 md:h-16 mx-auto" icon={faInstagram} />
                        </a>
                    </div>
                    <div className="hover:scale-105 transition duration-500">
                        <a href="https://www.youtube.com/@fabiofreitasbr" target="_blank">
                            <FontAwesomeIcon className="fill-white my-2 h-8 md:h-16 mx-auto" icon={faYoutube} />
                        </a>
                    </div>
                    <div className="hover:scale-105 transition duration-500">
                        <a href="https://www.tiktok.com/@fabiofreitasbr" target="_blank">
                            <FontAwesomeIcon className="fill-white my-2 h-8 md:h-16 mx-auto" icon={faTiktok} />
                        </a>
                    </div>
                    <div className="hover:scale-105 transition duration-500">
                        <a href="https://www.twitter.com/ffabiofreitasbr" target="_blank">
                            <FontAwesomeIcon className="fill-white my-2 h-8 md:h-16 mx-auto" icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
