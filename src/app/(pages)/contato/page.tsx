'use client'
import Image from 'next/image'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import FormContato from '@/app/Parts/estrutura/formContato';


export default function Page() {
    return (
        <>
            <h3 className="my-2 font-medium text-2xl font-open uppercase text-blue-500">Entre em contato</h3>
            <h4 className="font-reading text-lg mb-4">Enviaremos mensagem via whatsapp</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                    <FormContato />
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
