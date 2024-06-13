import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

export default function Contato() {
    
    const [responseMessage, setResponseMessage] = useState('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [motivo, setMotivo] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [colorMessage, setColorMessage] = useState('bg-red-700');

    const handleName = (e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value); };
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); };
    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => { setPhone(e.target.value); };
    const handleMobile = (e: ChangeEvent<HTMLInputElement>) => { setMobile(e.target.value); };
    const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => { setMessage(e.target.value); };

    function onSubmitSend(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (name == null || name.length < 3) { setResponseMessage('O nome digitado não é válido'); }
        else if (email == null || email.length < 5) { setResponseMessage('O e-mail digitado não é válido'); }
        else if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { setResponseMessage('O e-mail digitado não é válido'); }
        else {
            setResponseMessage('');
            axios.post('/api/leads', { name, email, phone, mobile, motivo, message})
                .then(function (response) {
                    setResponseMessage(response.data.message);
                    if (response.data.status == true) { setColorMessage('bg-green-700'); } else { setColorMessage('bg-red-700'); }
                })
                .catch(function (error) { setResponseMessage("HOUVE UM ERRO AO ENVIAR A MENSAGEM"); });
        }
    }
    return (
        <form onSubmit={onSubmitSend} id="form-contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" onChange={handleName} value={name} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500 md:col-span-2" placeholder="NOME" />
                <input type="text" name="mobile" onChange={handleMobile} value={mobile} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500" placeholder="Celular" />
                <input type="text" name="phone" onChange={handlePhone} value={phone} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500" placeholder="Telefone" />
                <input type="text" name="email" onChange={handleEmail} value={email} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500 md:col-span-2" placeholder="E-mail" />
                <select name="motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500 md:col-span-2">
                    <option value="" disabled>MOTIVO DO CONTATO</option>
                    <option value="atendimento">Atendimento ao consumidor - SAC</option>
                    <option value="imprensa">Imprensa</option>
                    <option value="reclamacoes">Reclamações</option>
                    <option value="sugestoes">Sugestões</option>
                    <option value="elogios">Elogios</option>
                    <option value="bug">Reportar Erro ou Problema</option>
                    <option value="outro">Outro Motivo</option>
                </select>
                <textarea name="message" value={message} onChange={handleMessage} className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 text-gray-500 md:col-span-2 h-32" placeholder="MENSAGEM"></textarea>
                <input type="submit" className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase" value="Enviar Contato" />
            </div>
            {
                (responseMessage != '') ? <div id="response-contact" className="w-full"><div className={'wpcf7-response-output w-full text-white my-2 p-2 uppercase text-center font-reading font-bold border border-gray-300-2 border border-gray-300-white  border border-gray-300-dashed ' + colorMessage} role="alert">{responseMessage}</div></div> : ''
            }
        </form>
    )
}