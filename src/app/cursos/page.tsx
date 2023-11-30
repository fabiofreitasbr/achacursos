"use client"
import Image from 'next/image'
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function Page() {
    function videoEmbed(video: string) { return "https://www.youtube.com/embed/" + video; }
    function videoUrl(video: string) { return "https://www.youtube.com/watch?v=" + video; }
    function thumbnailUrl(video: string) { return "https://img.youtube.com/vi/" + video + "/hqdefault.jpg"; }

    let [isOpen, setIsOpen] = useState < boolean > (false);
    let [isVideo, setIsVideo] = useState < string > ("");
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
                    <div className="flex flex-wrap">
                        <div className="md:w-1/3 lg:w-1/4 px-4  md:block">
                            <aside>
                                <div className="mb-4 md:mb-10">
                                    <form action="/" method="GET">
                                        <div className="flex md:block">
                                            <h3 className="hidden md:block text-xl my-2 font-medium text-blue-500 uppercase">
                                                Pesquisar
                                            </h3>
                                            <input name="s" type="text" className="w-full py-3 px-4 rounded-l-lg md:rounded-lg text-lg font-medium border text-gray-500 col-span-2" placeholder="DIGITE SUA BUSCA" />
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
                                        <a
                                            href="">
                                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                                <div className="w-1/3 bg-center bg-cover"
                                                    style={{backgroundImage: "url(https://www.redeconomia.com.br/wp-content/uploads/2022/06/image00002.jpeg);"}}>
                                                </div>
                                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                                    <h3 className="text-sm text-gray-400 font-medium pb-2">
                                                        Redeconomia‎ na cozinha
                                                        – ⁣⁣⁣⁣⁣⁣POLENTA‎‎ COM‎‎ RAGU‎‎ DE‎‎ LINGUIÇA‎‎ E‎‎ QUEIJO‎‎
                                                    </h3>
                                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                                        VER MAIS
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-full py-2">
                                        <a
                                            href="">
                                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                                <div className="w-1/3 bg-center bg-cover"
                                                    style={{backgroundImage: "url(https://www.redeconomia.com.br/wp-content/uploads/2022/06/image00001.jpeg);"}}>
                                                </div>
                                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                                    <h3 className="text-sm text-gray-400 font-medium pb-2">
                                                        Dicas &amp; Truques – Sabia‎ que‎ o‎ amaciante‎ cria‎ uma‎ película‎
                                                        que‎ diminui‎ a‎ absorção‎ da‎ água?‎
                                                    </h3>
                                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                                        VER MAIS
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-full py-2">
                                        <a
                                            href="">
                                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                                <div className="w-1/3 bg-center bg-cover"
                                                    style={{backgroundImage: "url(https://www.redeconomia.com.br/wp-content/uploads/2022/06/image00001-1.jpeg);"}}>
                                                </div>
                                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                                    <h3 className="text-sm text-gray-400 font-medium pb-2">
                                                        Redeconomia na cozinha – Receita KIBE CREMOSO
                                                    </h3>
                                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                                        VER MAIS
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-full py-2">
                                        <a href="">
                                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                                <div className="w-1/3 bg-center bg-cover"
                                                    style={{backgroundImage: "url(https://www.redeconomia.com.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-01-21-at-11.43.06.jpeg);"}}>
                                                </div>
                                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                                    <h3 className="text-sm text-gray-400 font-medium pb-2">
                                                        Redeconomia na cozinha – Receita de Gelo Saborizado
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
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/bebidas/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Bebidas
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/comidas/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Comidas
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/datas-comemorativas/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Datas Comemorativas
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/dicas-truques/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Dicas &amp; Truques
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/em-casa-com-a-redeconomia/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Em casa com a redeconomia
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/lanches-rapidos/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Lanches Rápidos
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/redeconomia-na-cozinha/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Redeconomia na Cozinha
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.redeconomia.com.br/dicas-receitas/sobremesas/">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-lg text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                                                    Sobremesas
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">

                                <div className="px-2 py-2">
                                    <a href="/single" className="h-full">
                                        <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                                            <div className="bg-blue-500 h-80 bg-cover bg-center" style={{backgroundImage: "url(../img/product-1.jpg);"}}></div>
                                            <div className="px-6 py-4 flex justify-between">
                                                <div className="uppercase text-black">
                                                    <div className="pb-4">
                                                        <h4 className="text-sm text-orange">Estácio de Sá</h4>
                                                        <h3 className="text-lg text-blue-500 font-medium">Desenvolvimento Web</h3>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm text-orange"><strong className="text-red-700">EAD</strong> - Rio de Janeiro - RJ</h4>
                                                        <h3 className="text-lg text-blue-500 font-medium">R$ 150,00 <small className="text-xs text-gray-500">Mensal</small></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
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
                                            href="/page/19/">
                                            19
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
