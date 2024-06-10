'use client'
import Image from 'next/image'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Page() {
    const [responseMessage, setResponseMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [colorMessage, setColorMessage] = useState('bg-red-700');

    const handleName = (e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value); };
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); };
    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => { setPhone(e.target.value); };
    const handleMobile = (e: ChangeEvent<HTMLInputElement>) => { setMobile(e.target.value); };

    function onSubmitSend(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (name == null || name.length < 3) { setResponseMessage('O nome digitado não é válido'); }
        else if (email == null || email.length < 5) { setResponseMessage('O e-mail digitado não é válido'); }
        else if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { setResponseMessage('O e-mail digitado não é válido'); }
        else {
            setResponseMessage('');
            axios.post('https://infoback.infocomputec.com.br/aviseme', {
                nome: name,
                email: email,
                phone: phone,
                mobile: mobile,
            })
                .then(function (response) {
                    setResponseMessage(response.data.message);
                    if (response.data.status == true) { setColorMessage('bg-green-700'); } else { setColorMessage('bg-red-700'); }
                })
                .catch(function (error) { setResponseMessage("HOUVE UM ERRO AO ENVIAR A MENSAGEM"); });
        }
    }
    return (
        <>
            <h3 className="my-2 font-medium text-2xl font-open uppercase text-blue-500">Entre em contato</h3>
            <h4 className="font-reading text-lg mb-4">Enviaremos mensagem via whatsapp</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                    <form onSubmit={onSubmitSend} id="form-contact">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="name" onChange={handleName} value={name} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500 md:col-span-2" placeholder="NOME" />
                            <input type="text" name="mobile" onChange={handleMobile} value={mobile} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500" placeholder="Celular" />
                            <input type="text" name="phone" onChange={handlePhone} value={phone} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500" placeholder="Telefone" />
                            <input type="text" name="email" onChange={handleEmail} value={email} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500 md:col-span-2" placeholder="E-mail" />
                            <select name="reason_id" className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500 md:col-span-2">
                                <option>MOTIVO DO CONTATO</option>
                                <option value="1">Atendimento ao consumidor - SAC</option>
                                <option value="2">Imprensa</option>
                                <option value="3">Reclamações</option>
                                <option value="4">Sugestões</option>
                                <option value="5">Elogios</option>
                                <option value="6">Reportar Erro ou Problema</option>
                                <option value="7">Outro Motivo</option>
                            </select>
                            <textarea name="message" className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500 md:col-span-2 h-32" placeholder="MENSAGEM"></textarea>
                            <input type="hidden" name="action" value="contact" />
                            <input type="submit" className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase" value="Enviar Contato" />
                        </div>
                        {
                            (responseMessage != '') ? <div id="response-contact" className="w-full"><div className={'wpcf7-response-output w-full text-white my-2 p-2 uppercase text-center font-reading font-bold border border-gray-300-2 border border-gray-300-white  border border-gray-300-dashed ' + colorMessage} role="alert">{responseMessage}</div></div> : ''
                        }
                    </form>
                </div>
                <div>
                    <div className="text-xl text-black rounded-xl">
                        <div className="border-red-700 border border-gray-300-blue-500 border border-gray-300-2 rounded-xl text-lg p-6 my-3 md:mt-0">
                            <div className="text-xl pb-2">
                                <h3 className="font-bold uppercase">Informações de contato</h3>
                                <p>Entre em contato conosco também pelas informações abaixo:</p>
                            </div>
                            <a href="">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">WhatsApp:</div>
                                        <div>(21) 99999-9999</div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">E-mail:</div>
                                        <div>contato@achacursos.com.br</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
