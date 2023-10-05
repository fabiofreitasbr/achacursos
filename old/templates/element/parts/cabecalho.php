
<header class="w-full bg-gray-100 text-red-700 border-b-blue-500 border-b-2 md:border-none py-2">
    <div class="container mx-auto px-4 flex items-center justify-between">
        <div class="flex md:w-3/12 justify-start items-center">
            <a href="<?php echo $this->Url->build('/'); ?>">
                <img src="<?php echo $this->Url->build('/'); ?>img/logo.png" class="w-48 md:w-full" alt="">
            </a>
        </div>
        <div class="block md:flex md:w-6/12 justify-center md:flex fixed md:relative top-0 md:top-auto h-screen md:h-auto w-full md:bg-none pt-20 md:pt-0 px-4 md:px-0 z-50 md:z-auto text-center md:text-left text-xl md:text-base font-reading transition-all md:transition-none duration-300 ease-in-out -left-full md:!left-0" id="menu-search-bar">
            <div class="button-close absolute block md:hidden top-0 right-0 px-4 py-2 my-2 mx-4 text-3xl bg-red-700 hover:bg-red-900 rounded-md text-white hover:text-yellow-300 transition-colors" id="search-menu-close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div id="search_widget" class="w-full relative" data-search-controller-url="/pesquisa">
                <form method="get" action="/search.html">
                    <button type="submit" class="bg-none border-none absolute right-0 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-700" viewBox="0 0 24.88 24.879">
                            <path id="search" d="M65.506,55.827a10.137,10.137,0,1,1,1.277-1.283c.067.07.135.145.206.217q3.186,3.188,6.376,6.372a.962.962,0,0,1,.324,1.008.913.913,0,0,1-1.46.455A3.068,3.068,0,0,1,72,62.376q-3.156-3.156-6.312-6.314A2.628,2.628,0,0,1,65.506,55.827Zm1.773-7.761a8.3,8.3,0,1,0-8.312,8.286,8.415,8.415,0,0,0,7.462-4.642A7.944,7.944,0,0,0,67.279,48.067Z" transform="translate(-48.85 -37.926)" />
                            </svg>
                    </button>
                    <span role="status" aria-live="polite" class="ui-helper-hidden-accessible">
                    </span>
                    <input
                        class="border-gray bg-white text-black font-reading border w-full py-3 px-5 shadow-md rounded-lg ui-autocomplete-input"
                        name="s" placeholder="Digite o curso que deseja" type="text" autocomplete="off">
                    <input type="hidden" name="controller" class="focus-visible:ring focus-visible:ring"
                        value="search">
                </form>
            </div>
        </div>
        <div class="flex items-center md:w-3/12 justify-end md:text-sm lg:text-base">
            <a href="<?php echo $this->Url->build(['controller' => 'p', 'action' => 'faq']); ?>" class="mx-1 md:mx-4 justify-center items-center hidden md:flex">
                <div>
                    <i class="fa-regular fa-circle-question text-blue-500 text-2xl"></i>
                </div>
                <div class="hidden lg:block text-sm xl:text-base mx-1 xl:mx-3 uppercase">
                    Dúvidas
                </div>
            </a>
            <a href="<?php echo $this->Url->build(['controller' => 'p', 'action' => 'contato']); ?>" class="mx-1 xl:mx-4 justify-center items-center hidden md:flex">
                <div>
                    <i class="fa-brands fa-whatsapp text-blue-500 text-2xl"></i>
                </div>
                <div class="hidden lg:block text-sm xl:text-base mx-1 xl:mx-3 uppercase">
                    Contato
                </div>
            </a>
        </div>
        <div class="flex md:hidden px-4 justify-start items-center">
            <a id="search-menu" class="mx-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 fill-blue-500" viewBox="0 0 24.88 24.879">
                    <path id="search" d="M65.506,55.827a10.137,10.137,0,1,1,1.277-1.283c.067.07.135.145.206.217q3.186,3.188,6.376,6.372a.962.962,0,0,1,.324,1.008.913.913,0,0,1-1.46.455A3.068,3.068,0,0,1,72,62.376q-3.156-3.156-6.312-6.314A2.628,2.628,0,0,1,65.506,55.827Zm1.773-7.761a8.3,8.3,0,1,0-8.312,8.286,8.415,8.415,0,0,0,7.462-4.642A7.944,7.944,0,0,0,67.279,48.067Z" transform="translate(-48.85 -37.926)" />
                </svg>
            </a>
            <a id="mobile-call">
                <div class="hamburger hamburger--squeeze">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</header>
