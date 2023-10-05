
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Index() {
    return (
        <div className="bg-cover bg-center flex justify-center items-center min-h-screen" style={{backgroundImage: "url('./img/background.jpg')"}}>
            <div className="container max-w-md px-4 ">
                <div className="m-4 text-center">
                    <img src={"img/person.jpg"} className="rounded-full border-2 md:border-4 border-white mx-auto w-24 md:w-36" alt="" />
                </div>
                <div className="my-2 md:my-6 text-center">
                    <img src={"img/logo-new-white.png"} className="mx-auto w-2/3" alt="" />
                </div>
                <div className="font-medium text-base md:text-lg lg:text-xl">
                    <a href="https://www.youtube.com/channel/UCyKuffBgA4iZD41lkl3JTdw?sub_confirmation=1" target="_blank">
                        <div className="my-4 px-3 py-1 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faYoutube} /></div>
                            <div className="px-2"> Se inscreva no canal</div>
                        </div>
                    </a>
                    <a href="https://www.fabiofreitas.com.br/" target="_blank">
                        <div className="my-4 px-3 py-1 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faLink} /></div>
                            <div className="px-2"> Entre no site</div>
                        </div>
                    </a>
                    <a href="http://instagram.com.br/fabiofreitasbr" target="_blank">
                        <div className="my-4 px-3 py-1 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faInstagram} /></div>
                            <div className="px-2"> Siga-me no insta</div>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/FabioFreitasBR" target="_blank">
                        <div className="my-4 px-3 py-1 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faFacebookSquare} /></div>
                            <div className="px-2"> /fabiofreitasbr</div>
                        </div>
                    </a>
                    <a href="https://www.tiktok.com/@fabiofreitasbr" target="_blank">
                        <div className="my-4 px-3 py-1 md:py-2 rounded-full bg-white hover:bg-blue-500 text-blue-500  hover:text-white border-4 md:border-4 border-gray-100 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <div className="px-2"><FontAwesomeIcon className='h-6' icon={faTiktok} /></div>
                            <div className="px-2"> @fabiofreitasbr</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
