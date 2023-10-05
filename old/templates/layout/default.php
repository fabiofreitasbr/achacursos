<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Acha Cursos
    </title>
    <link rel="stylesheet" href="https://use.typekit.net/wyf5pvb.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo $this->Url->build('/'); ?>css/style.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet">
    <link href="<?php echo $this->Url->build('/'); ?>node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/css/splide.min.css" />
    <style>
        .splide__slide img { width: 100%; height: auto; } .splide__slide img { width: 100%; height: 100%; object-fit: cover; } .slide-thumb .splide__slide { opacity: 0.6; } .slide-thumb .splide__slide.is-active { opacity: 1; }
    </style>
</head>
<body>
    <?php
    echo $this->element('parts/cabecalho');
    echo $this->element('parts/menu'); ?>
    <main>
        <?php
        echo $this->fetch('content');
        ?>
    </main>
    <?php echo $this->element('parts/rodape'); ?>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="<?php echo $this->Url->build('/'); ?>node_modules/flowbite/dist/flowbite.js"></script>
    <script>
        var swiper = new Swiper(".swiper", {
            loop: true,
        });
        var swiper = new Swiper(".swiper-offers", {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
    </script>

    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/js/splide.min.js"></script>
</body>
</html>
