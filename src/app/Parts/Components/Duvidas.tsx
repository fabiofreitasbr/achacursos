'use client'
import { Accordion } from "flowbite-react"

const Duvidas = () => {
    return(
        <Accordion collapseAll className='border-none'>
            <Accordion.Panel>
                <Accordion.Title className="p-4 bg-gray-100 text-black focus:bg-red-500 focus:text-white hover:bg-gray-200 rounded-md my-2 text-xs md:text-sm lg:text-base">
                Como faço para comprar um curso?
                </Accordion.Title>
                <Accordion.Content className="p-4">
                    <p className="mb-2 text-gray-500 text-xs md:text-sm lg:text-base">
                        Você entra na página do curso e clica em comprar ou em conhecer o curso, então é redirecionado para a instituição de ensino ou página de curso para comprar o curso que deseja!
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="p-4 bg-gray-100 text-black focus:bg-red-500 focus:text-white hover:bg-gray-200 rounded-md my-2 text-xs md:text-sm lg:text-base">
                    Como são as aulas?
                </Accordion.Title>
                <Accordion.Content className="p-4">
                    <p className="mb-2 text-gray-500 text-xs md:text-sm lg:text-base">
                        As aulas são vídeos gravados que você pode acessar através de plataforma e ver as aulas quando quiser!
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="p-4 bg-gray-100 text-black focus:bg-red-500 focus:text-white hover:bg-gray-200 rounded-md my-2 text-xs md:text-sm lg:text-base">
                    O curso é bom ou atualizado?
                </Accordion.Title>
                <Accordion.Content className="p-4">
                    <p className="mb-2 text-gray-500 text-xs md:text-sm lg:text-base">
                        O curso contém todas as aulas de tecnologias mais modernas usadas no mercados e exemplos reais de uso dessas tecnologias.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="p-4 bg-gray-100 text-black focus:bg-red-500 focus:text-white hover:bg-gray-200 rounded-md my-2 text-xs md:text-sm lg:text-base">
                    E se eu tiver alguma dúvida?
                </Accordion.Title>
                <Accordion.Content className="p-4">
                    <p className="mb-2 text-gray-500 text-xs md:text-sm lg:text-base">
                        Em cada aula você possui uma área para enviar suas dúvidas, receber suporte e respostas sobre o curso.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
};
export default Duvidas;