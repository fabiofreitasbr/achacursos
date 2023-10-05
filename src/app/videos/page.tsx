"use client"
import Image from 'next/image'
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function Page() {
    function videoEmbed(video: string) { return "https://www.youtube.com/embed/" + video; }
    function videoUrl (video: string) { return "https://www.youtube.com/watch?v=" + video; }
    function thumbnailUrl (video: string) { return "https://img.youtube.com/vi/" + video + "/hqdefault.jpg"; }

    let [isOpen, setIsOpen] = useState<boolean>(false);
    let [isVideo, setIsVideo] = useState<string>("");
    function closeModal() {
        setIsOpen(false)
    }

    function openModal(newVideo: string) {
        setIsVideo(videoEmbed(newVideo));
        setIsOpen(true)
    }
    const videos = [
        {
            "title": "Montando um PC Gamer com um gabinete top - Unboxing Gabinete Gamer Mancer WARD",
            "video": "GS1jEBJpKbA",
        },
        {
            "title": "Nós jogamos o Contexto.me - Melhor jogo de palavras!",
            "video": "0Oan--l2YxA",
        },
        {
            "title": "Jogando Among Us - Sobreviva quem puder!",
            "video": "GinqGa9vyyk",
        },
        {
            "title": "Jogando Stumble Guys com Jéssyca",
            "video": "DsB87xrlLhY",
        },
        {
            "title": "Como eu edito meus vídeos - Aprenda a editar com Premiere Pro",
            "video": "lj_jXViPiow",
        },
        {
            "title": "Como aumentar suas vendas na internet?",
            "video": "OhAarcE37gU",
        },
        {
            "title": "Aprenda a criar aplicativos do zero usando React Native! (Sem Cortes)",
            "video": "ppcUm4qigFU",
        },
        {
            "title": "Como fazer para ter mais qualidade no seu trabalho?",
            "video": "wpKg-KgjUdA",
        },
        {
            "title": "Me transformaram em um jogo no meu aniversário!",
            "video": "gAjQLubCT7g",
        },
        {
            "title": "Criando Layouts com Adobe XD vs Photoshop - XD Na Prática",
            "video": "pSkOOGEVFEE",
        },
        {
            "title": "Aprendendo a programar na prática com Tailwind (HTML + CSS)",
            "video": "7YileMfxLiU",
        },
        {
            "title": "Encontramos o melhor jogador de Stumble Guys!",
            "video": "HI0ONLyD-84",
        },
        {
            "title": "Aprendendo a Programar do Zero (HTML e CSS)",
            "video": "Ec7yJUfQFho",
        },
        {
            "title": "Será que dessa vez eu ganho? - Jogando Gartic",
            "video": "4KJV2c5gDHQ",
        },
        {
            "title": "Ensaio fotográfico com modelo no horto da cidade!",
            "video": "LeD4HWNPpoc",
        },
        {
            "title": "Partida de Gartic mais fácil de todas que eu errei tudo!",
            "video": "KP1ZJ_XBjck",
        },
        {
            "title": "Como criar capas para YouTube pelo celular/computador - Thumbnails de Vídeos",
            "video": "N4gRV7IRwRE",
        },
        {
            "title": "Edição de Fotos pelo celular - Lightroom para Iniciantes (Tutorial completo)",
            "video": "MGdWYu68PBM",
        },
        {
            "title": "Os vídeos mais engraçados de 2021 (React)",
            "video": "_El8pnmW27I",
        },
        {
            "title": "A partida de gartic phone mais confusa de todas!",
            "video": "JF20qXZCVHI",
        },
        {
            "title": "Tour pelo meu escritório/estúdio!",
            "video": "13FnO1_CYAk",
        },
        {
            "title": "Como criar artes com o celular usando o Canva!",
            "video": "daFScgd3nrs",
        },
        {
            "title": "Aprendendo a programar de um jeito rápido e fácil!",
            "video": "WFMwHklQd-c",
        },
        {
            "title": "Como vender produtos na internet e ter sua loja virtual",
            "video": "r7gYtJVoM90",
        },
        {
            "title": "Como ganhar muitos seguidores - 10K no insta - Todos os métodos - Parte 2",
            "video": "EjbUwWId2VY",
        },
        {
            "title": "Como ganhar muitos seguidores - 10K no insta - Todos os métodos - Parte 1",
            "video": "X_9eO9af7sc",
        },
        {
            "title": "7 Dicas pra tirar fotos boas com o celular",
            "video": "Ft1KNIEbZ10",
        },
        {
            "title": "5 dicas de como se destacar no instagram",
            "video": "rVzUiZ8yN-A",
        },
        {
            "title": "Minha Vez - Ton Carfi (Cover Fábio Freitas)",
            "video": "3eQLu7IS710",
        },
    ];
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap md:flex-row-reverse">
                        <div className="md:w-1/3 lg:w-1/4 px-4  md:block">
                            <aside>
                                <div className="mb-4 md:mb-10">
                                    <form action="/" method="GET">
                                        <div className="flex md:block">
                                            <h3 className="hidden md:block text-xl my-2 font-medium text-blue-500 uppercase">
                                                Pesquisar
                                            </h3>
                                            <input name="s" type="text"
                                                className="w-full py-3 px-4 rounded-l-lg md:rounded-lg text-base font-medium border text-gray-500 col-span-2"
                                                placeholder="DIGITE SUA BUSCA" />
                                                <button
                                                    className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-r-full md:rounded-full md:my-4 py-2 px-10 block text-base uppercase">
                                                    Pesquisar
                                                </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mb-4 md:mb-10 hidden md:block">
                                    <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">
                                        Mais Recentes
                                    </h3>
                                    <div className="w-full py-2">
                                        <a onClick={() => openModal(videos[0].video)}>
                                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                                <div className="w-1/3 bg-center bg-cover" style={{backgroundImage: "url('" + thumbnailUrl(videos[0].video) + "')"}}></div>
                                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                                    <h3 className="text-sm text-gray-400 font-medium pb-2">
                                                        {videos[0].title}
                                                    </h3>
                                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                                        VER MAIS
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-full py-2">
                                        <a onClick={() => openModal(videos[1].video)}>
                                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                                <div className="w-1/3 bg-center bg-cover" style={{backgroundImage: "url('" + thumbnailUrl(videos[1].video) + "')"}}></div>
                                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                                    <h3 className="text-sm text-gray-400 font-medium pb-2">
                                                        {videos[1].title}
                                                    </h3>
                                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                                        VER MAIS
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-full py-2">
                                        <a onClick={() => openModal(videos[2].video)}>
                                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                                <div className="w-1/3 bg-center bg-cover" style={{backgroundImage: "url('" + thumbnailUrl(videos[2].video) + "')"}}></div>
                                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                                    <h3 className="text-sm text-gray-400 font-medium pb-2">
                                                        {videos[2].title}
                                                    </h3>
                                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                                        VER MAIS
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-full py-2">
                                        <a onClick={() => openModal(videos[3].video)}>
                                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                                <div className="w-1/3 bg-center bg-cover" style={{backgroundImage: "url('" + thumbnailUrl(videos[3].video) + "')"}}></div>
                                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                                    <h3 className="text-sm text-gray-400 font-medium pb-2">
                                                        {videos[3].title}
                                                    </h3>
                                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                                        VER MAIS
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="mb-2 md:mb-10">
                                    <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">
                                        Tags
                                    </h3>
                                    <div className="my-2 flex flex-wrap md:block">
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Jogos
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Web
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Fotografia
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Filmagem
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Marketing
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Mídia Social
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Design
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Música
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                                {
                                    videos.map((videoCurrent) => (
                                        <div key={videoCurrent.video} className="px-2 py-4 h-full transform hover:scale-105 transition duration-500">
                                            <a onClick={() => openModal(videoCurrent.video)} target="_blank" className="h-full">
                                                <div className="bg-gray-900 rounded-xl h-full overflow-hidden">
                                                    <img src={thumbnailUrl(videoCurrent.video)} className="w-full object-cover aspect-video rounded-xl md:rounded-2xl lazyloaded" alt="" />
                                                    <div className="px-3 md:px-6 pt-3 md:pt-6 pb-2 md:pb-4 uppercase">
                                                        <h3 className="text-base md:text-xl text-gray-200 font-medium pb-3 md:pb-6">{videoCurrent.title}</h3>
                                                        <div className="text-blue-500 text-right py-2 text-base md:text-xl font-bold">VER MAIS</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                                    </Transition.Child>

                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="w-full md:max-w-2xl lg:max-w-4xl p-8 bg-black transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all">
                                                    
                                                    <a onClick={closeModal}>
                                                        <div className='absolute rounded-full top-0 right-0 py-2 px-3 text-blue-500 hover:bg-blue-500 hover:text-white flex justify-center items-center'>
                                                            <FontAwesomeIcon className='text-2xl' icon={faClose} />
                                                        </div>
                                                    </a>
                                                    <div className="">
                                                        <iframe className='w-full aspect-video rounded-xl md:rounded-2xl lazyloaded' src={isVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                                    </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
                            <div className="mx-auto block text-center my-8">
                                <ul className="inline-flex -space-x-px">
                                    <li>
                                        <a className="py-2 px-3 text-white bg-blue-500 border border-gray-300">
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100"
                                            href="/page/2/">
                                            2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100"
                                            href="/page/3/">
                                            3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100"
                                            href="/page/23/">
                                            23
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white rounded-r-lg border border-gray-300 hover:bg-red-100"
                                            href="/page/2/">
                                            Próximo »
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
