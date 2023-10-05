<?php
$this->assign('title', 'Cursos');
?>
<main>
    <section class="py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
                <div class="md:w-1/3 lg:w-1/4 px-4  md:block">
                    <aside>
                        <div class="mb-4 md:mb-10">
                            <form action="<?php echo $this->Url->build(['controller' => 'cursos']); ?>" method="GET">
                                <h3 class="hidden md:block text-xl my-2 font-medium text-blue-500 uppercase">
                                    Pesquisar
                                </h3>
                                <div class="my-2">
                                    <input name="pesquisa" placeholder="Digite condomínio, região, bairro ou cidade" class="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 md:col-span-2 tt-autocomplete kenlo-filter-property">
                                </div>
                                <div class="my-2">
                                    <select name="action" class="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 md:col-span-2 custom-select">
                                        <option value="comprar">Comprar</option>
                                        <option value="alugar">Alugar</option>
                                    </select>
                                </div>
                                <div class="my-2">
                                    <select name="TipoImovel" class="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 md:col-span-2 custom-select">
                                        <option value="" selected>Tipo</option>
                                        <?php
                                        foreach ( $tiposcursos as $singleTipos) {
                                            ?><option value="<?php echo $singleTipos->TipoImovel; ?>"><?php echo $singleTipos->TipoImovel; ?></option><?php
                                        }
                                        ?>
                                    </select>
                                </div>
                                <div class="my-2">
                                    <select name="PrecoVenda" class="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 md:col-span-2 custom-select">
                                        <option value="" selected>Preço de compra</option>
                                        <option value="~60000">Até 60.000</option>
                                        <option value="60000~80000">De 60.000 até 80.000</option>
                                        <option value="80000~100000">De 80.000 até 100.000</option>
                                        <option value="100000~200000">De 100.000 até 200.000</option>
                                        <option value="200000~400000">De 200.000 até 400.000</option>
                                        <option value="400000~600000">De 400.000 até 600.000</option>
                                        <option value="600000~800000">De 600.000 até 800.000</option>
                                        <option value="800000~1000000">De 800.000 até 1.000.000</option>
                                        <option value="1000000~2000000">De 1.000.000 até 2.000.000</option>
                                        <option value="2000000~4000000">De 2.000.000 até 4.000.000</option>
                                        <option value="4000000~6000000">De 4.000.000 até 6.000.000</option>
                                        <option value="6000000~8000000">De 6.000.000 até 8.000.000</option>
                                        <option value="8000000~">Acima de 8.000.000</option>
                                    </select>
                                </div>
                                <div class="my-2">
                                    <select name="quartos" class="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 md:col-span-2 custom-select">
                                        <option value="" selected="">Mínimo de Quartos</option>
                                        <option value="1">1 ou +</option>
                                        <option value="2">2 ou +</option>
                                        <option value="3">3 ou +</option>
                                        <option value="4">4 ou +</option>
                                        <option value="5">5 ou +</option>
                                    </select>
                                </div>
                                <div class="my-2">
                                    <select name="condominio" class="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 md:col-span-2 custom-select">
                                        <option label="Em condomínio fechado" value="" selected="">Em condomínio fechado</option>
                                        <option label="Sim" value="em-condominio-fechado">Sim</option>
                                        <option label="Não" value="-em-condominio-fechado">Não</option>
                                    </select>
                                </div>
                                <div class="my-2">
                                    <input type="hidden" name="action" value="comprar">
                                    <button type="submit" class="bg-orange text-gray-100 font-medium rounded-full py-3 px-16 block text-lg uppercase" id="clickSearch">
                                        <i class="fa fa-search mx-2"></i>
                                        Buscar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </aside>
                </div>
                <div class="w-full md:w-2/3 lg:w-3/4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                        <?php
                        if ($cursos->count() > 0) {
                            foreach ($cursos as $singleCurso) {
                                echo $this->element('parts/curso-lista', ['curso' => $singleCurso]);
                            }
                        }
                        ?>
                    </div>
                    <div class="mx-auto block text-center my-8">
                        <ul class="inline-flex -space-x-px list-paginator">
                            <?php
                            echo $this->Paginator->first('<<');
                            echo $this->Paginator->prev('<');
                            echo $this->Paginator->numbers(['modulus' => 4]);
                            echo $this->Paginator->next('>');
                            echo $this->Paginator->last('>>');
                            ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

