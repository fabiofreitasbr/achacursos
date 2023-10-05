
<footer class="bg-gray-100 py-2 md:py-8">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-16">
            <div class="md:block flex justify-center md:flex-auto  col-span-2 md:col-span-1">
                <a href="<?php echo $this->Url->build('/'); ?>"><img src="<?php echo $this->Url->build('/'); ?>img/logo.png" alt=""></a>
                <div class="hidden md:block">
                    <h3 class=" py-3 font-bold text-red-700 uppercase">Sobre</h3>
                    <p class="font-reading">
                        Acha Cursos é o maior site de busca de cursos com as melhores condições de mercado para você se profissionalizar no mercado de trabalho.
                    </p>
                </div>
            </div>
            <div class="">
                <h3 class="py-3 font-bold text-red-700">LINKS IMPORTANTES</h3>
                <ul class="font-reading">
                    <li class="py-1"><a href="<?php echo $this->Url->build('/'); ?>" class="text-blue-500 hover:text-red-500">Home</a></li>
                    <li class="py-1"><a href="<?php echo $this->Url->build(['controller' => 'cursos', 'action' => 'index']); ?>" class="text-blue-500 hover:text-red-500">Cursos Online</a></li>
                    <li class="py-1"><a href="<?php echo $this->Url->build(['controller' => 'cursos', 'action' => 'index']); ?>" class="text-blue-500 hover:text-red-500">E-books</a></li>
                    <li class="py-1"><a href="<?php echo $this->Url->build(['controller' => 'cursos', 'action' => 'index']); ?>" class="text-blue-500 hover:text-red-500">Presenciais</a></li>
                    <li class="py-1"><a href="<?php echo $this->Url->build(['controller' => 'cursos', 'action' => 'index']); ?>" class="text-blue-500 hover:text-red-500">Faculdade</a></li>
                    <li class="py-1"><a href="<?php echo $this->Url->build(['controller' => 'cursos', 'action' => 'index']); ?>" class="text-blue-500 hover:text-red-500">Gratuitos</a></li>
                    <li class="py-1"><a href="<?php echo $this->Url->build(['controller' => 'cursos', 'action' => 'index']); ?>" class="text-blue-500 hover:text-red-500">Por Profissão</a></li>
                </ul>
            </div>
            <div class="">
                <h3 class="py-3 font-bold text-red-700">REDES SOCIAIS</h3>
                <div class="font-bold py-2 bg-pink md:text-lg flex text-red-700 gap-5">
                    <div>
                        <a href="https://facebook.com/achacursos" target="_blank">
                            <i class="fab fa-facebook-square fa-2x text-blue-500 hover:text-red-500"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/achacursos/" target="_blank">
                            <i class="fab fa-instagram fa-2x text-blue-500 hover:text-red-500"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/channel/UCT7CCOImCY0VAH1_lVgjtHw" target="_blank">
                            <i class="fab fa-youtube fa-2x text-blue-500 hover:text-red-500"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<div class="bg-red-800">
    <div class="container mx-auto px-4">
        <div class="text-center text-white py-3 text-sm md:text-base uppercase">
            Acha Cursos - Todos os direitos Reservados
        </div>
    </div>
</div>
