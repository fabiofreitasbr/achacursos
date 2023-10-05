'use client'
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';

const Videos = () => {
    
    const splideOptions: any = {
        perPage: 3,
        perMove: 1,
        type: 'loop',
        drag: 'free',
        snap: true, 
        gap: '1rem',
        pagination: false,
        breakpoints: {
            640: { perPage: 1, },
            960: { perPage: 2.2, },
            1200: { perPage: 3, },
        }
    }
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
        <div className="py-12" id="articles">
            <div className="md:container mx-auto md:px-4">
                <h2 className="text-blue-500 text-center text-xl md:text-2xl my-4 pb-4 font-medium uppercase">Vídeos</h2>
                <Splide options={splideOptions} aria-label="Slide de Vídeos">
                    {
                        videos.map((videoCurrent) => (
                            <SplideSlide key={videoCurrent.video}>
                                <div className="px-2 py-4 h-full transform hover:scale-105 transition duration-500">
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
                            </SplideSlide>
                        ))
                    }
                </Splide>
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
                <div className="w-full">
                    <a href="#">
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 px-4 md:px-6 mx-auto py-1 md:py-2 my-4 text-white text-base md:text-lg rounded-lg my-2 block">
                            VER MAIS
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Videos;