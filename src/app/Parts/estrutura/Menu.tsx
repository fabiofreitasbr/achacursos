'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import SearchBar from './SearchBar';

import ImgLogo from "../../../../public/img/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

interface menuType {
    title: string;
    link: string;
};

const Menu = () => {

    const namePath = usePathname();
    const menuFlutuante = (namePath == "/") ? " absolute " : "";

    const [menuActive, setMenuActive] = useState('');
    const [menuNavigation, setMenuNavigation] = useState('-right-full');
    const [menuSearchBar, setMenuSearchBar] = useState('-left-full');

    const menuBurger = () => {
        var currentActive = (menuActive == '') ? 'is-active' : '';
        var currentNavigation = (menuActive == '') ? 'right-0' : '-right-full';
        setMenuActive(currentActive);
        setMenuNavigation(currentNavigation);
    }
    const menuSearch = () => {
        var searchStatus = (menuSearchBar == '-left-full') ? 'left-0' : '-left-full';
        setMenuSearchBar(searchStatus);
    }
    
    return (
        <>
            <header className="z-20 relative w-full bg-gray-100 text-red-700 border-b-blue-500 border-b-2 md:border-none py-2">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="flex md:w-3/12 justify-start items-center">
                        <Link href="/">
                            <Image src={ImgLogo} className="w-32 md:w-48 md:w-full" alt="" />
                        </Link>
                    </div>
                    <div className={"block md:flex md:w-6/12 bg-blue-500 md:!bg-transparent justify-center fixed md:relative top-0 md:top-auto h-screen md:h-auto w-full md:bg-none pt-20 md:pt-0 px-4 md:px-0 z-50 md:z-auto text-center md:text-left text-xl md:text-base  transition-all md:transition-none duration-300 ease-in-out md:!left-0 " + menuSearchBar}>
                        <div className="button-close absolute block md:hidden top-0 right-0 px-4 py-2 my-2 mx-4 text-3xl bg-red-700 hover:bg-red-800 rounded-md text-white transition-colors" onClick={menuSearch}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <div id="search_widget" className="w-full relative" data-search-controller-url="/pesquisa">
                            <SearchBar />
                        </div>
                    </div>
                    <div className="flex items-center md:w-3/12 justify-end gap-1 md:gap-2 md:text-sm lg:text-base">
                        <div className="">
                            <Link href="/duvidas" className="mx-2 2xl:mx-4 justify-center items-center block md:flex">
                                <div>
                                    <FontAwesomeIcon className="text-red-500 md:text-blue-500 md:hover:text-red-500 hover:text-red-600 text-2xl" icon={faCircleQuestion} />
                                </div>
                                <div className="hidden lg:block text-sm xl:text-base mx-1 xl:mx-3 uppercase">
                                    Dúvidas
                                </div>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="/contato" className="mx-2 2xl:mx-4 justify-center items-center block md:flex">
                                <div>
                                    <FontAwesomeIcon className="text-red-500 md:text-blue-500 md:hover:text-red-500 hover:text-red-600 text-2xl" icon={faWhatsapp} />
                                </div>
                                <div className="hidden lg:block text-sm xl:text-base mx-1 xl:mx-3 uppercase">
                                    Contato
                                </div>
                            </Link>
                        </div>
                        <div className="flex md:hidden justify-start items-center">
                            <div onClick={menuSearch} className="mx-4">
                                <FontAwesomeIcon className="text-2xl text-blue-500" icon={faMagnifyingGlass} />
                            </div>
                            <div onClick={menuBurger}>
                                <div className={"hamburger hamburger--squeeze " + menuActive}>
                                    <div className="hamburger-box">
                                        <div className="hamburger-inner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div onClick={menuBurger} className={"z-10 menu bg-blue-500 text-white w-full md:w-auto h-screen md:h-auto fixed md:relative md:right-0 top-0 px-6 pt-16 md:pt-0 transition-all duration-300 ease-in-out  " + menuNavigation}>
                <nav className="">
                    <div className="container mx-auto px-4 uppercase">
                        <ul className="z-10 top-menu flex flex-col md:flex-row justify-between md:items-center text-sm lg:text-lg" id="top-menu">
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <Link className="py-4 flex items-center md:justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="/">
                                    Início
                                </Link>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <Link className="py-4 flex items-center md:justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="/cursos">
                                    Cursos Online
                                </Link>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <Link className="py-4 flex items-center md:justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="/ebooks">
                                    E-books
                                </Link>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <Link className="py-4 flex items-center md:justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="/presenciais">
                                    Presenciais
                                </Link>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <Link className="py-4 flex items-center md:justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="/faculdade">
                                    Faculdade
                                </Link>
                            </li>
                            <li className="dropdown-item dropdown mx-2 category" id="category-12">
                                <Link className="py-4 flex items-center md:justify-center hover:bg-red-800 px-2 lg:px-4 transition" href="/profissao">
                                    Por Profissão
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Menu;