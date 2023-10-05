'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
            <div className="bg-black text-white w-full relative z-50">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="/">
                                <img src="img/logo-new.png" className="w-48" alt="" />
                            </a>
                        </div>
                        <div>
                            <nav className="items-center hidden md:flex ">
                                <div id="menu-principal-header" className="area-menu-principal">
                                    <ul id="header-nav" className="mx-2 hidden md:flex text-sm lg:text-base">
                                        {
                                            menuList.map(function (x: menuType) {
                                                return(
                                                    <li key={x.link}>
                                                        <a href={x.link} className="px-2 lg:px-3 uppercase font-medium text-white hover:text-blue-500 transition">{x.title}</a>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div>
                            <div className="flex items-center gap-x-2 md:gap-x-2">
                                <a href="https://www.infocomputec.com.br/" target="_blank">
                                    <button className="py-1 px-2 md:px-4 rounded-full md:rounded-md border-blue-500 border bg-transparent transition hover:bg-blue-500 hover:text-white uppercase flex justify-center items-center gap-x-2">
                                        <FontAwesomeIcon className="fill-white my-2 w-6 md:w-4" icon={faGraduationCap} />
                                        <div className='hidden xl:block'>Aprenda</div>
                                    </button>
                                </a>
                                <a className="flex md:hidden" onClick={menuBurger}>
                                    <div className={"hamburger hamburger--squeeze " + menuActive}>
                                        <div className="hamburger-box">
                                            <div className="hamburger-inner">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={"fixed top-0 h-screen w-full bg-black pt-36 px-4 z-40 text-center text-xl transition-all duration-300 ease-in-out block md:hidden " + menuNavigation}>
                <div className="button-close absolute top-0 right-0 px-4 py-2 my-2 mx-4 text-3xl bg-red-700 hover:bg-red-900 rounded-md text-white hover:text-yellow-300 transition-colors" id="header-bar-mobile-close">
                    <i className="fa-solid fa-xmark">
                    </i>
                </div>
                <div>
                    <ul className="text-white uppercase">
                        {
                            menuList.map(function (x: menuType) {
                                return(
                                    <li key={x.link} className='mx-2 md:mx-4'>
                                        <a href={x.link} className="py-2 flex items-center justify-center uppercase font-medium text-white hover:text-blue-500 transition">{x.title}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div>
                    <ul id="pre-list-ul" className="text-white flex justify-center items-center my-4 text-xl">
                        <li className="m-2">
                            <a href="https://www.instagram.com/fabiofreitasbr/" target="blank" className="menu-link main-menu-link">
                                <FontAwesomeIcon className="" icon={faInstagram} />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="https://pt-br.facebook.com/fabiofreitasbr" target="blank" className="menu-link main-menu-link">
                                <FontAwesomeIcon className="" icon={faSquareFacebook} />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="https://www.youtube.com/@fabiofreitasbr" target="blank" className="menu-link main-menu-link">
                                <FontAwesomeIcon className="" icon={faYoutube} />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="https://www.tiktok.com/@fabiofreitasbr" target="blank" className="menu-link main-menu-link">
                                <FontAwesomeIcon className="" icon={faTiktok} />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="https://www.twitter.com/ffabiofreitasbr" target="blank" className="menu-link main-menu-link">
                                <FontAwesomeIcon className="" icon={faTwitter} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Menu;