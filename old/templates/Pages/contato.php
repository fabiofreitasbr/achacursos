<main>
    <section class="py-8">
        <div class="container mx-auto px-4">
            <h3 class="my-2 font-medium text-2xl font-open uppercase text-blue-500">Entre em contato</h3>
            <h4 class="font-reading text-lg mb-4">Enviaremos mensagem via whatsapp ou e-mail.</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                    <form action="" method="post" id="form-contact">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="name" id="name"
                                class="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                placeholder="Nome">
                            <input type="text" name="phone" id="phone"
                                class="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500"
                                placeholder="Telefone">
                            <input type="text" name="email" id="email"
                                class="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500"
                                placeholder="E-mail">
                            <select name="reason_id" id="reason_id"
                                class="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2">
                                <option selected="selected" disabled="">MOTIVO DO CONTATO</option>
                                <option value="1">Atendimento ao consumidor - SAC</option>
                                <option value="2">Imprensa</option>
                                <option value="3">Reclamações</option>
                                <option value="4">Sugestões</option>
                                <option value="5">Elogios</option>
                                <option value="6">Reportar Erro ou Problema</option>
                                <option value="7">Outro Motivo</option>
                            </select>
                            <textarea name="message" id="message"
                                class="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                cols="30" rows="5" placeholder="MENSAGEM"></textarea>
                            <input type="hidden" name="action" value="contact">
                            <input type="submit"
                                class="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase">
                            <br>
                        </div>
                        <div id="response-contact" class="w-full"></div>
                        <div
                            class="hidden w-full bg-blue-500 text-white my-2 p-3 uppercase text-center font-reading font-bold border-2 border-white  border-dashed">
                        </div>
                        <div
                            class="w-full bg-red-700 text-white my-2 p-3 uppercase text-center font-reading font-bold border-2 border-white  border-dashed">
                        </div>
                        <div
                            class="w-full bg-yellow-600 text-white my-2 p-3 uppercase text-center font-reading font-bold border-2 border-white  border-dashed">
                        </div>
                        <div
                            class="w-full bg-green-700 text-white my-2 p-3 uppercase text-center font-reading font-bold border-2 border-white  border-dashed">
                        </div>
                    </form>
                </div>
                <div>
                    <div class="text-xl text-black rounded-xl font-brandon">
                        <div class="border-red-700 border-blue-500 border-2 rounded-xl text-lg p-6 my-3 md:mt-0">
                            <div class="text-xl pb-2">
                                <h3 class="font-bold uppercase">Siga nas redes sociais</h3>
                                <p>Estamos nas redes sociais conectados ao seu dia a dia.</p>
                            </div>
                            <a href="https://facebook.com/achacursos" target="_blank">
                                <div class="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div class="px-6 text-4xl text-blue-500">
                                        <i class="fab fa-facebook"></i>
                                    </div>
                                    <div>
                                        <div class="py-1 font-bold uppercase">Facebook:</div>
                                        <div>/achacursos</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/achacursos/" target="_blank">
                                <div class="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div class="px-6 text-4xl text-blue-500">
                                        <i class="fab fa-instagram"></i>
                                    </div>
                                    <div>
                                        <div class="py-1 font-bold uppercase">Instagram:</div>
                                        <div>@achacursos</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/channel/UCT7CCOImCY0VAH1_lVgjtHw" target="_blank">
                                <div class="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div class="px-6 text-4xl text-blue-500">
                                        <i class="fab fa-youtube"></i>
                                    </div>
                                    <div>
                                        <div class="py-1 font-bold uppercase">YouTube:</div>
                                        <div>Acha Cursos</div>
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
