'use client'
import { Accordion } from "flowbite-react"

const ListDuvidas = [
    {
        title: 'Como faço para comprar um curso?',
        slug: 'compra',
        content: 'Você entra na página do curso e clica em comprar ou em conhecer o curso, então é redirecionado para a instituição de ensino ou página de curso para comprar o curso que deseja! A partir de então a instituição passar a ser 100% responsável pela entrega do material e conteúdo do curso.'
    },
    {
        title: 'Como são as aulas e cursos?',
        slug: 'aulas',
        content: 'As aulas dos cursos online são vídeos gravados que você pode acessar através de plataforma e ver as aulas quando quiser! Os e-books são enviados em PDF para leitura. Os cursos presenciais e faculdades precisam ser verificados a disponibilidade na sua região ou se existe EAD para o caso das faculdades.'
    },
    {
        title: 'Como são as aulas e cursos?',
        slug: 'aulas',
        content: 'As aulas dos cursos online são vídeos gravados que você pode acessar através de plataforma e ver as aulas quando quiser! Os e-books são enviados em PDF para leitura. Os cursos presenciais e faculdades precisam ser verificados a disponibilidade na sua região ou se existe EAD para o caso das faculdades.'
    },
    {
        title: 'Os cursos da plataforma são atualizados?',
        slug: 'atualizacoes',
        content: 'O curso contém todas as aulas de tecnologias mais modernas usadas no mercados e exemplos reais de uso dessas tecnologias.'
    },
    {
        title: 'E se eu tiver dúvidas e dificuldades?',
        slug: 'duvidas',
        content: 'Em cada curso normalmente tem uma área de dúvidas, comunidade e suporte. Importante conferir com os responsáveis do curso.'
    },
    {
        title: 'Como funcionam garantias?',
        slug: 'garantias',
        content: 'Cada curso tem um prazo mínimo de solicitar a garantia, a quantidade mínima é de 7 dias. Confira na página do curso escolhido a garantia.'
    },
    {
        title: 'Consigo acesso a bolsas e descontos?',
        slug: 'descontos',
        content: 'O propósito real do Acha Cursos é encontrar as melhores ofertas de cursos.'
    },
]

const Duvidas = () => {
    return(
        <Accordion collapseAll className='border-none'>
            {
                ListDuvidas.map((singleDuvidas) => (
                    <Accordion.Panel key={singleDuvidas.slug}>
                        <Accordion.Title className="p-4 bg-gray-100 text-black focus:bg-red-500 focus:text-white hover:bg-gray-200 rounded-md my-2 text-sm lg:text-base">
                            {singleDuvidas.title}
                        </Accordion.Title>
                        <Accordion.Content className="p-4">
                            <p className="mb-2 text-gray-500 text-sm lg:text-base">
                                {singleDuvidas.content}
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))
            }
        </Accordion>
    )
};
export default Duvidas;