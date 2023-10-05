
<section class="my-8" id="card">
    <div class="container mx-auto px-4">
        <div class="px-2 my-2 flex flex-col lg:flex-row items-center">
            <h2 class="text-blue-500 text-2xl md:text-2xl font-reading ">Todos os Cursos</h2>
            <div class="flex text-sm md:text-base my-2 lg:my-0 mx-4">
                <a href="" class="py-2 mx-4 text-red-700 text-center font-medium"><span>Mais Procurados</span></a>
                <a href="" class="py-2 mx-4 text-red-700 text-center font-medium"><span>Mais Recentes</span></a>
                <a href="" class="py-2 mx-4 text-red-700 text-center font-medium"><span>Melhores Preços</span></a>
            </div>
            <a href="">
                <button type="button" class="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full py-1 px-8 text-base mx-4 uppercase">VER TODOS</button>
            </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            <?php
            foreach ($cursosRecentes as $singleCurso) {
                echo $this->element('parts/curso-lista', ['curso' => $singleCurso]);
            }
            ?>
        </div>
        <div class="w-full">
            <a href="">
                <button type="button" class="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-lg mx-auto uppercase">VER MAIS</button>
            </a>
        </div>
    </div>
</section>
