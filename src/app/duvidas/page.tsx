import Image from 'next/image'

export default function Page() {
    return (
        <main>

            <main>
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button type="button" className="!bg-rosa-500 flex items-center justify-between w-full p-5 font-bold uppercase text-left !text-branco border border-b-0" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                    <span>Como funciona Clube Embarque?</span>
                                    <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 font-light border border-b-0 border-gray-200">
                                    <p className="mb-2 text-gray-500 font-bold">Clube Embarque é uma Plataforma de Serviços de Saúde Particular, que tem como principal finalidade atender às pessoas que optam em não contratar um plano de saúde. O assinante tem acesso a programas preventivos de bem-estar e qualidade de vida.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-2">
                                <button type="button" className="!bg-rosa-500 flex items-center justify-between w-full p-5 font-bold uppercase text-left !text-branco border border-b-0" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                    <span>Clube Embarque é um plano de saúde?</span>
                                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                <div className="p-5 font-light border border-b-0 border-gray-200">
                                    <p className="mb-2 text-gray-500 font-bold">Clube Embarque não é um plano de saúde. Somos uma alternativa inteligente para quem não tem plano de saúde.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-3">
                                <button type="button" className="!bg-rosa-500 flex items-center justify-between w-full p-5 font-bold uppercase text-left !text-branco border" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>Quais as regras para ser um assinante Clube Embarque?</span>
                                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                <div className="p-5 font-light border border-t-0 border-gray-200">
                                    <p className="mb-2 text-gray-500 font-bold">Você precisa ter de 14 a 74 anos.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-4">
                                <button type="button" className="!bg-rosa-500 flex items-center justify-between w-full p-5 font-bold uppercase text-left !text-branco border" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                                    <span>Existe carência para começar a utilizar os serviços Clube Embarque?</span>
                                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
                                <div className="p-5 font-light border border-t-0 border-gray-200">
                                    <p className="mb-2 text-gray-500 font-bold">Não existe carência. A utilização dos serviços é feita em até 24 horas após a identificação do pagamento.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-5">
                                <button type="button" className="!bg-rosa-500 flex items-center justify-between w-full p-5 font-bold uppercase text-left !text-branco border" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
                                    <span>Como posso assinar?</span>
                                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
                                <div className="p-5 font-light border border-t-0 border-gray-200">
                                    <p className="mb-2 text-gray-500 font-bold">Basta você acessar o nosso site, contratar um dos planos e preencher o formulário inicial. Assim que o pagamento for confirmado, entraremos em contato via e-mail e WhatsApp para confirmar a sua adesão.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-6">
                                <button type="button" className="!bg-rosa-500 flex items-center justify-between w-full p-5 font-bold uppercase text-left !text-branco border" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
                                    <span>A assinatura é recorrente?</span>
                                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
                                <div className="p-5 font-light border border-t-0 border-gray-200">
                                    <p className="mb-2 text-gray-500 font-bold">Sim. As cobranças são feitas de formas recorrentes mês a mês sem utilizar seu limite de crédito.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-7">
                                <button type="button" className="!bg-rosa-500 flex items-center justify-between w-full p-5 font-bold uppercase text-left !text-branco border" data-accordion-target="#accordion-collapse-body-7" aria-expanded="false" aria-controls="accordion-collapse-body-7">
                                    <span>Como posso cancelar?</span>
                                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-7" className="hidden" aria-labelledby="accordion-collapse-heading-7">
                                <div className="p-5 font-light border border-t-0 border-gray-200">
                                    <p className="mb-2 text-gray-500 font-bold">O plano não tem fidelidade, por isso pode ser cancelado a qualquer hora. Não havendo pagamento na data escolhida, o plano é cancelado em até 5 dias corridos.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-8">
                                <button type="button" className="!bg-rosa-500 flex items-center justify-between w-full p-5 font-bold uppercase text-left !text-branco border" data-accordion-target="#accordion-collapse-body-8" aria-expanded="false" aria-controls="accordion-collapse-body-8">
                                    <span>Qual é a área de cobertura?</span>
                                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-8" className="hidden" aria-labelledby="accordion-collapse-heading-8">
                                <div className="p-5 font-light border border-t-0 border-gray-200">
                                    <p className="mb-2 text-gray-500 font-bold">Clube Embarque tem cobertura nacional e pode ser utilizado em qualquer estado, cidade e município onde houver profissionais cadastrados para realizar o atendimento.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-9">
                                <button type="button" className="!bg-rosa-500 flex items-center justify-between w-full p-5 font-bold uppercase text-left !text-branco border" data-accordion-target="#accordion-collapse-body-9" aria-expanded="false" aria-controls="accordion-collapse-body-9">
                                    <span>Quando posso utilizar os serviços?</span>
                                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-9" className="hidden" aria-labelledby="accordion-collapse-heading-9">
                                <div className="p-5 font-light border border-t-0 border-gray-200">
                                    <p className="mb-2 text-gray-500 font-bold">Em até 24h após o preenchimento do “Formulário Informativo”, que se encontra na Área do Cliente.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </main>
    )
}
