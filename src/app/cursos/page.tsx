import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBookBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';

interface propsType {
    cursoCurrent: {
        title: string,
        subtitle: string,
        content: string,
        img: string,
        desconto: string,
        descontoMensagem: string,
        aulas: string,
        modulos: string,
        minutos: string,
        link: string,
    }
};

const ListCursos = (props: propsType) => {
    return (
        <div className="p-6 rounded-lg max-w-sm px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-white">{props.cursoCurrent.title}</h3>
            <div className="relative">
                <img className="w-full rounded-xl" src={props.cursoCurrent.img} alt="Colors" />
                <p className="absolute top-0 bg-white text-blue-500 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{props.cursoCurrent.desconto}</p>
                <p className="absolute top-0 right-0 bg-white text-blue-500 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">{props.cursoCurrent.descontoMensagem}</p>
            </div>
            <h1 className="mt-4 text-blue-500 text-lg font-bold cursor-pointer">{props.cursoCurrent.subtitle}</h1>
            <p>{props.cursoCurrent.content}</p>
            <div className="my-4">
                <div className="flex space-x-1 items-center mb-2">
                    <span>
                        <FontAwesomeIcon className="fill-white text-lg mr-2" icon={faPlay} />
                    </span>
                    <p>{props.cursoCurrent.aulas} Aulas</p>
                </div>
                <div className="flex space-x-1 items-center mb-2">
                    <span>
                        <FontAwesomeIcon className="fill-white text-lg mr-2" icon={faBookBookmark} />
                    </span>
                    <p>{props.cursoCurrent.modulos} Módulos</p>
                </div>
                <div className="flex space-x-1 items-center mb-2">
                    <span>
                        <FontAwesomeIcon className="fill-white text-lg mr-2" icon={faClock} />
                    </span>
                    <p>{props.cursoCurrent.minutos} minutos</p>
                </div>
                <a href={props.cursoCurrent.link} target="_blank"><button className="py-1 px-2 md:px-4 my-6 rounded-full md:rounded-md border-blue-500 border bg-transparent transition hover:bg-blue-500 hover:text-white uppercase flex justify-center items-center gap-x-2 w-full">VER O CURSO</button></a>
            </div>
        </div>
    )
}


export default function Page() {
    const cursos = [
        {
            title: 'Web Design',
            subtitle: 'Desenvolvimento web na prática do iniciante ao avançado',
            content: 'Aprenda a desenvolver projetos',
            img: '../img/cursos/web.jpg',
            desconto: '10%',
            descontoMensagem: 'Descontos Especiais',
            aulas: '32',
            modulos: '2',
            minutos: '95',
            link: 'https://www.infocomputec.com.br/',
        },
    ];
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="py-4 flex justify-center items-center">
                        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
                            {cursos.map(function (curso, i) {
                                return <ListCursos key={i} cursoCurrent={curso} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
