<div class="px-2 py-2">
    <a href="<?= $this->Url->build(['controller' => 'cursos', 'action' => 'p', $curso->slug]) ?>" class="h-full">
        <div class="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
            <?php
            $foto = false;
            $h = 0;
            foreach ($curso->photos as $singleFotos) {
                if ($singleFotos->url && ($singleFotos->main == 1 || $h == 0)) { $foto = $singleFotos->url; }
                ++$h;
            }
            if ($foto) {
                ?><div class="bg-blue-500 h-80 bg-cover bg-center" style="background-image: url('<?php echo $foto; ?>');"></div><?php
            }
            ?>
            <div class="px-6 py-4 flex justify-between">
                <div class="uppercase text-black">
                    <div class="pb-4">
                        <h4 class="text-sm text-orange"><?php echo $curso->institution; ?></h4>
                        <h3 class="text-lg text-blue-500 font-medium"><?php echo $curso->name; ?></h3>
                    </div>
                    <div>
                        <h4 class="text-sm text-orange"><strong class="text-red-700"><?php echo $curso->type; ?></strong> - <?php echo $curso->city . ' - ' . $curso->state; ?></h4>
                        <h3 class="text-lg text-blue-500 font-medium">R$ <?php echo number_format($curso->price, 2, ',', '.'); ?> <small class="text-xs text-gray-500"><?php echo $curso->method; ?></small></h3>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>
