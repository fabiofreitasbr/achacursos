<?php
$this->assign('title', 'Curso');
?>
<main class="py-4">
    <section class="py-8">
        <div class="container mx-auto px-4">
            <div class="md:flex justify-between">
                <div>
                    <p class="text-lg font-medium text-gray-500"><?php echo $curso->institution . ' - ' . $curso->type; ?></p>
                    <h1 class="mt-1 text-3xl font-semibold font-reading text-blue-500"><?php echo $curso->name; ?></h1>
                    <dl class="my-4 text-xs font-medium flex items-center">
                        <dt class="sr-only">Location</dt>
                        <dd class="flex items-center">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="mr-1 text-blue-500" aria-hidden="true">
                                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                            </svg>
                            <?php echo $curso->city . ' - ' . $curso->state; ?>
                        </dd>
                    </dl>
                </div>
                <div class="text-left md:text-right flex md:block items-center my-2">

                    <p class="text-sm uppercase font-medium text-gray-500">Está com dúvida?</p>

                    <button type="button" class="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-2 py-2 px-4 block text-sm mx-auto uppercase">Fale Conosco</button>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full md:w-2/3">
                    <?php

                    $foto = false;
                    $h = 0;
                    foreach ($curso->photos as $singleFotos) {
                        if ($singleFotos->url && ($singleFotos->Principal == 1 || $h == 0)) {
                            $foto = $singleFotos->url;
                        }
                        ++$h;
                    }
                    if (count($curso->photos) > 0) {
                    ?>
                        <div>
                            <section class="splide w-full object-cover rounded-xl h-96 overflow-hidden" id="slide-main" aria-label="Splide Basic HTML Example" aria-label="">
                                <div class="splide__track">
                                    <ul class="splide__list">
                                        <?php
                                        foreach ($curso->photos as $singleFoto) {
                                        ?>
                                            <li class="splide__slide w-full">
                                                <div class="h-full w-full bg-cover bg-center"></div>
                                                <!-- <img src="<?php echo $singleFoto->url; ?>" alt=""> -->
                                            </li>
                                        <?php
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </section>
                            <section class="slide-thumb splide" id="slide-thumb" aria-label="Splide Basic HTML Example" aria-label="">
                                <div class="splide__track">
                                    <ul class="splide__list">
                                        <?php
                                        foreach ($curso->photos as $singleFoto) {
                                        ?>
                                            <li class="splide__slide w-full">
                                                <img src="<?php echo $singleFoto->url; ?>" alt="">
                                            </li>
                                        <?php
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    <?php
                    }
                    ?>
                    <?php
                    if ($curso->description) {
                        ?>
                        <div class="py-4 text-base text-gray-500">
                            <h3 class="text-blue-500 my-2 text-2xl md:text-2xl font-open">Sobre o imóvel</h3>
                            <p class="py-1">
                                <?php echo $curso->description ?>
                            </p>
                        </div>
                        <?php
                    }
                    if ($curso->video) {
                        ?>
                        <div class="py-4 text-base text-gray-500">
                            <h3 class="text-blue-500 my-2 text-2xl md:text-2xl font-open">Vídeo</h3>
                            <iframe class="w-full aspect-video rounded-xl md:rounded-2xl lazyloaded" src="https://www.youtube.com/embed/<?php echo $curso->video; ?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <?php
                    }

                    ?>
                </div>
                <div class="w-full md:w-1/3">
                    <div class="px-2 pb-6">
                        <div class="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                            <div class="px-6 py-4">
                                <div class="">
                                    <div class="py-3">
                                        <h4 class="text-lg text-orange uppercase"><?php echo $curso->type; ?></h4>
                                        <h3 class="text-2xl text-blue-500 font-medium uppercase">R$ <?php echo number_format($curso->price, 2, ',', '.'); ?></h3>
                                        <p class="text-sm my-1 text-gray-300 uppercase"><?php echo $curso->method; ?></p>
                                    </div>
                                    <div class="py-3">
                                        <h4 class="text-sm text-gray-400">Duração</h4>
                                        <h3 class="text-lg text-gray-400 font-medium"><?php echo $curso->duration; ?></h3>
                                    </div>
                                    <div class="py-3">
                                        <h4 class="text-sm text-gray-400">Tipo</h4>
                                        <h3 class="text-lg text-gray-400 font-medium"><?php echo $curso->type; ?></h3>
                                    </div>
                                    <div class="py-3">
                                        <h4 class="text-sm text-gray-400">Instituição</h4>
                                        <h3 class="text-lg text-gray-400 font-medium"><?php echo $curso->institution; ?></h3>
                                    </div>
                                </div>
                                <button type="button" class="bg-red-700 hover:bg-red-800 text-gray-100 font-medium rounded-full my-4 py-2 px-4 block text-lg mx-auto uppercase w-4/5">Eu quero</button>
                                <button type="button" class="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-2 px-4 block text-lg mx-auto uppercase w-4/5">mais informações</button>
                            </div>
                        </div>
                    </div>
                    <div class="px-2 pb-6">
                        <div class="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                            <div class="px-6 py-4">
                                <h3 class="text-blue-500 my-2 text-2xl md:text-2xl font-open">O você aprende?</h3>
                                <div class="grid grid-cols-2 text-gray-500 text-base">
                                    <div class="py-1">Exemplo</div>
                                    <div class="py-1">Exemplo</div>
                                    <div class="py-1">Exemplo</div>
                                    <div class="py-1">Exemplo</div>
                                    <div class="py-1">Exemplo</div>
                                    <div class="py-1">Exemplo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var main = new Splide('#slide-main', {
            type: 'slide',
            rewind: true,
            pagination: false,
            arrows: true,
        });

        var thumbnails = new Splide('#slide-thumb', {
            fixedWidth: 100,
            fixedHeight: 60,
            gap: 10,
            rewind: true,
            pagination: false,
            isNavigation: true,
            arrows: false,
            breakpoints: {
                600: {
                    fixedWidth: 60,
                    fixedHeight: 44,
                },
            },
        });

        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
    });
</script>
