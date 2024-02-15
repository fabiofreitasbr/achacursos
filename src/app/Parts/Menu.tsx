'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook, faTiktok, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import SearchBar from './SearchBar';

import ImgLogo from "../../../public/img/logo.png"
import Image from 'next/image';

interface menuType {
    title: string;
    link: string;
};

const Menu = () => {

    const [menuActive, setMenuActive] = useState('');
    const [menuNavigation, setMenuNavigation] = useState('-right-full');
    const menuBurger = () => {
        var currentActive = (menuActive == '') ? 'is-active' : '';
        var currentNavigation = (menuActive == '') ? 'right-0' : '-right-full';
        setMenuActive(currentActive);
        setMenuNavigation(currentNavigation);
    }
    const menuList = [
        { title: 'Início', link: '/' },
        { title: 'Sobre Mim', link: '/sobre' },
        { title: 'Vídeos', link: '/videos' },
        { title: 'Serviços', link: '/servicos' },
        { title: 'Presets', link: '/presets' },
        { title: 'Cursos', link: '/cursos' },
        { title: 'E-books', link: '/ebooks' },
    ];
    return (
        <>
            <header className="w-full bg-gray-100 text-red-700 border-b-blue-500 border-b-2 md:border-none py-2">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="flex md:w-3/12 justify-start items-center">
                        <a href="/">
                            <Image src={ImgLogo} className="w-48 md:w-full" alt="" />
                        </a>
                    </div>
                    <div className="block md:flex md:w-6/12 justify-center md:flex fixed md:relative top-0 md:top-auto h-screen md:h-auto w-full md:bg-none pt-20 md:pt-0 px-4 md:px-0 z-50 md:z-auto text-center md:text-left text-xl md:text-base  transition-all md:transition-none duration-300 ease-in-out -left-full md:!left-0" id="menu-search-bar">
                        <div className="button-close absolute block md:hidden top-0 right-0 px-4 py-2 my-2 mx-4 text-3xl bg-red-700 hover:bg-red-900 rounded-md text-white hover:text-yellow-300 transition-colors" id="search-menu-close">
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div id="search_widget" className="w-full relative" data-search-controller-url="/pesquisa">
                            <SearchBar />
                        </div>
                    </div>
                    <div className="flex items-center md:w-3/12 justify-end md:text-sm lg:text-base">
                        <div id="_desktop_user_info">
                            <div className="user-info">
                                <a href="/duvidas" className="mx-1 md:mx-4 justify-center items-center hidden md:flex">
                                    <div>
                                        <FontAwesomeIcon className="fa-regular fa-circle-question text-blue-500 hover:text-red-500 text-2xl" icon={faCircleQuestion} />
                                    </div>
                                    <div className="hidden lg:block text-sm xl:text-base mx-1 xl:mx-3 uppercase">
                                        Dúvidas
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id="_desktop_user_info">
                            <div className="user-info">
                                <a href="/contato" className="mx-1 xl:mx-4 justify-center items-center hidden md:flex">
                                    <div>
                                        <FontAwesomeIcon className="text-blue-500 hover:text-red-500 text-2xl" icon={faWhatsapp} />
                                    </div>
                                    <div className="hidden lg:block text-sm xl:text-base mx-1 xl:mx-3 uppercase">
                                        Contato
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden px-4 justify-start items-center">
                        <a id="search-menu" className="mx-4 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-blue-500" viewBox="0 0 24.88 24.879">
                                <path id="search" d="M65.506,55.827a10.137,10.137,0,1,1,1.277-1.283c.067.07.135.145.206.217q3.186,3.188,6.376,6.372a.962.962,0,0,1,.324,1.008.913.913,0,0,1-1.46.455A3.068,3.068,0,0,1,72,62.376q-3.156-3.156-6.312-6.314A2.628,2.628,0,0,1,65.506,55.827Zm1.773-7.761a8.3,8.3,0,1,0-8.312,8.286,8.415,8.415,0,0,0,7.462-4.642A7.944,7.944,0,0,0,67.279,48.067Z" transform="translate(-48.85 -37.926)" />
                            </svg>
                        </a>
                        <a id="mobile-call">
                            <div className="hamburger hamburger--squeeze">
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
            <div className="menu js-top-menu hidden md:block bg-blue-500 text-white" id="_desktop_top_menu">
                <nav className="">
                    <div className="container mx-auto px-4 uppercase">
                        <ul className=" z-10 top-menu flex justify-between items-center text-sm lg:text-lg" id="top-menu"
                            data-depth="0">
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <a className="py-4 flex items-center justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="/" data-depth="0">
                                    Home
                                </a>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <a className="py-4 flex items-center justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="/cursos" data-depth="0">
                                    Cursos Online
                                </a>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <a className="py-4 flex items-center justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="" data-depth="0">
                                    E-books
                                </a>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <a className="py-4 flex items-center justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="" data-depth="0">
                                    Presenciais
                                </a>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <a className="py-4 flex items-center justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="" data-depth="0">
                                    Faculdade
                                </a>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <a className="py-4 flex items-center justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="" data-depth="0">
                                    Por Profissão
                                </a>
                            </li>
                        </ul>
                        <div className="clearfix">
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Menu;