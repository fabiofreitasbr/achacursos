function Banner() {
    return (
        <section id="banner" className="my-8">
            <div className="container mx-auto px-4">
                <div className="swiper rounded-xl md:rounded-2xl overflow-hidden">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><a href="" className="w-full" target="_blank"><img src="img/banner.jpg" alt="" className="w-full" /></a></div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev after:text-red-700 after:!text-2xl after:md:!text-4xl"></div>
                    <div className="swiper-button-next after:text-red-700 after:!text-2xl after:md:!text-4xl"></div>
                </div>
            </div>
        </section>
    );
}
export default Banner