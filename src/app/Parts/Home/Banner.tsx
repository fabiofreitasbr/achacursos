'use client'

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

// or only core styles
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
import Link from 'next/link';

function Banner() {
    return (

        <section id="banner" className="mb-8">
            <div className="container mx-auto px-4">
                <div className="swiper rounded-xl md:rounded-2xl overflow-hidden">                    
                    <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <Link href="">
                                <Image src="/img/banner.jpg" width={1136} height={359} alt="" className="w-full" />
                            </Link>
                        </SplideSlide>
                        <SplideSlide>
                            <Link href="">
                                <Image src="/img/banner.jpg" width={1136} height={359} alt="" className="w-full" />
                            </Link>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </section>
    );
}
export default Banner