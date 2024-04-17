import React from 'react';
interface bannerInfo {
    Title: string
}

const BannerTitle = (Props: bannerInfo) => {
    return (
        <div className="banner bg-gray-100 bg-cover bg-center min-h-[6rem] sm:min-h-[8rem] md:min-h-[8rem] lg:min-h-[10rem] xl:min-h-[12rem] 2xl:min-h-[16rem] py-8 flex justify-center items-center" style={{backgroundImage: 'url(img/background-banner.jpg)'}}>
            <div
                className="text-sm md:text-xl text-black rounded-xl flex align-items justify-center h-full flex-col max-w-xl text-center">
                <h2 className="text-white text-3xl md:text-3xl lg:text-4xl uppercase leading-tight font-bold leading-relaxed my-2 md:my-2 ">
                    <span className="text-blue-500">{Props.Title}</span>
                </h2>
            </div>
        </div>
    );
}

export default BannerTitle;