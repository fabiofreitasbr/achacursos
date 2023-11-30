import Image from 'next/image'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMusic, faBullhorn, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faInstagram, faYoutube, faTiktok, faBehance, faTwitter } from '@fortawesome/free-brands-svg-icons';



export default function Page() {
  return (
    <main>
        <section className="py-8">
        <div className="container mx-auto px-4">

            <h3 className="my-2 font-medium text-2xl font-open uppercase text-blue-500">Entre em contato</h3>
            <h4 className="font-reading text-lg mb-4">Enviaremos mensagem via whatsapp</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                    <form action="" method="post" id="form-contact">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="name" id="name" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" placeholder="NOME" />
                            <input type="text" name="mobile" id="mobile" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500" placeholder="Celular" />
                            <input type="text" name="phone" id="phone" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500" placeholder="Telefone" />
                            <input type="text" name="email" id="email" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" placeholder="E-mail" />
                            <select name="reason_id" id="reason_id" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2">
                                <option>MOTIVO DO CONTATO</option>
                                <option value="1">Atendimento ao consumidor - SAC</option>
                                <option value="2">Imprensa</option>
                                <option value="3">Reclamações</option>
                                <option value="4">Sugestões</option>
                                <option value="5">Elogios</option>
                                <option value="6">Reportar Erro ou Problema</option>
                                <option value="7">Outro Motivo</option>
                            </select>
                            <textarea name="message" id="message" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" placeholder="MENSAGEM"></textarea>
                            <input type="hidden" name="action" value="contact" />
                            <input type="submit" className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase" />
                            <br />
                        </div>
                        <div id="response-contact" className="w-full"></div>
                        <div
                            className="hidden w-full bg-blue-500 text-white my-2 p-3 uppercase text-center font-reading font-bold border-2 border-white  border-dashed">
                        </div>
                        <div
                            className="w-full bg-red-700 text-white my-2 p-3 uppercase text-center font-reading font-bold border-2 border-white  border-dashed">
                        </div>
                        <div
                            className="w-full bg-yellow-600 text-white my-2 p-3 uppercase text-center font-reading font-bold border-2 border-white  border-dashed">
                        </div>
                        <div
                            className="w-full bg-green-700 text-white my-2 p-3 uppercase text-center font-reading font-bold border-2 border-white  border-dashed">
                        </div>
                    </form>
                </div>
                <div>
                    <div className="text-xl text-black rounded-xl font-brandon">
                        <div className="border-red-700 border-blue-500 border-2 rounded-xl text-lg p-6 my-3 md:mt-0">
                            <div className="text-xl pb-2">
                                <h3 className="font-bold uppercase">Informações de contato</h3>
                                <p>Entre em contato conosco também pelas informações abaixo:</p>
                            </div>
                            <a href="">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="fab fa-facebook"></i>
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">Telefone:</div>
                                        <div>(21) 3837-1544</div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">WhatsApp:</div>
                                        <div>(21) 3837-1544</div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">E-mail:</div>
                                        <div>vendas@tintasnacional.com.br</div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="fa-regular fa-map"></i>
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">Endereço:</div>
                                        <div>Av. Felíciano de Castilho, s/n, Lote 38 Quadra 25A. Chácara Rio-Petrópolis,
                                            Duque de Caxias – RJ, 25231-250</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  )
}
