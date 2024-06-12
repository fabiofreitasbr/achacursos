import { Skeleton } from "@/components/ui/skeleton"

export function LoadingSingleCurso() {
    return (
        <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="">
                <Skeleton className="bg-gray-900 h-6 my-2 w-full" />
                <Skeleton className="bg-gray-900 h-4 my-2 w-full" />
                <Skeleton className="bg-gray-900 h-4 my-2 w-full" />
                <Skeleton className="bg-gray-900 h-4 my-2 w-full" />
            </div>
        </div>
    )
}


export function LoadingCursoSingle() {
    return (
        <div className="px-2 py-4 h-full transform hover:scale-105 transition duration-500">
            <div className="rounded-xl h-full overflow-hidden">
                <Skeleton className="bg-gray-200 h-[166px] w-full" />
                <div className="px-3 md:px-6 pt-3 md:pt-6 pb-2 md:pb-4 uppercase">
                    <Skeleton className="bg-gray-200 h-4 my-2 w-full" />
                    <Skeleton className="bg-gray-200 h-4 my-2 w-full" />
                    <Skeleton className="bg-gray-200 h-4 my-2 w-full" />
                </div>
            </div>
        </div>
    )
}
export function LoadingRecentesSingle() {
    return (
        <div className="w-full py-2">
            <Skeleton className="bg-gray-400 rounded-xl bg-gray-200 h-28 w-full" />
        </div>
    )
}


export function LoadingCursos() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            <LoadingCursoSingle />
            <LoadingCursoSingle />
            <LoadingCursoSingle />
        </div>
    )
}
export function LoadingDestaque() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            <LoadingCursoSingle />
            <LoadingCursoSingle />
            <LoadingCursoSingle />
            <LoadingCursoSingle />
        </div>
    )
}

export function LoadingRecentes() {
    return (
        <div>
            <LoadingRecentesSingle />
            <LoadingRecentesSingle />
            <LoadingRecentesSingle />
        </div>
    )
}
export function LoadingTags() {
    return (
        <div className="my-2 flex flex-wrap gap-2">
            <Skeleton className="bg-gray-400 inline-block w-20 h-10" />
            <Skeleton className="bg-gray-400 inline-block w-20 h-10" />
            <Skeleton className="bg-gray-400 inline-block w-20 h-10" />
            <Skeleton className="bg-gray-400 inline-block w-20 h-10" />
            <Skeleton className="bg-gray-400 inline-block w-20 h-10" />
        </div>
    )
}
export function LoadingSingle() {
    return (
        <>
            <div className="flex justify-between">
                <div className="w-2/3">
                    <Skeleton className="bg-gray-200 mb-2 h-6 w-full max-w-96" />
                    <Skeleton className="bg-gray-200 mb-4 h-4 w-full max-w-64" />
                    <Skeleton className="bg-gray-200 mb-2 h-6 w-full max-w-56" />
                </div>
                <div className="text-right block items-center my-2">
                    <p className="text-xs md:text-sm uppercase font-medium text-gray-500 text-center">
                        <span className="hidden sm:block">Está com dúvida?</span>
                        <span className="block sm:hidden">Dúvidas?</span>
                    </p>
                    <a href="/contato">
                        <button type="button" className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-2 py-2 px-4 block text-xs md:text-sm mx-auto uppercase">
                            <span className="hidden sm:block">Fale Conosco</span>
                            <span className="block sm:hidden">Contato</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-2/3">
                    <div className="">
                        <Skeleton className="bg-gray-200 w-full aspect-[16/8] rounded-xl" />
                    </div>
                    <div className="py-4 text-base text-gray-500">
                        <h3 className="text-blue-500 my-2 text-lg lg:text-xl xl:text-2xl font-open">Sobre o Curso</h3>
                        <Skeleton className="bg-gray-200 w-full h-32 rounded-xl" />
                    </div>
                    <div className="py-4 text-base text-gray-500">
                        <h3 className="text-blue-500 my-2 text-lg lg:text-xl xl:text-2xl font-open">Vídeo</h3>
                        <Skeleton className="bg-gray-200 w-full aspect-video rounded-xl md:rounded-2xl" />
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="md:px-2 pb-6">
                        <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                            <div className="px-6 py-4">
                                <div className="">
                                    <div className="py-3">
                                        <Skeleton className="bg-gray-200 mb-2 h-6 max-w-96" />
                                        <Skeleton className="bg-gray-200 mb-4 h-4 max-w-64" />
                                        <Skeleton className="bg-gray-200 mb-2 h-6 max-w-56" />
                                    </div>
                                </div>
                                <Skeleton className="bg-gray-200 rounded-full my-4 py-2 px-4 block h-11 mx-auto w-4/5" />
                                <Skeleton className="bg-gray-200 rounded-full my-4 py-2 px-4 block h-11 mx-auto w-4/5" />
                            </div>
                        </div>
                    </div>
                    <div className="md:px-2 pb-6">
                        <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                            <div className="px-6 py-4">
                                <h3 className="text-blue-500 my-2 text-lg lg:text-xl xl:text-2xl font-open">Informações</h3>
                                <div className="grid grid-cols-2 text-gray-500 text-sm gap-x-2">
                                    <Skeleton className="bg-gray-200 mb-4 h-4 w-full" />
                                    <Skeleton className="bg-gray-200 mb-4 h-4 w-full" />
                                    <Skeleton className="bg-gray-200 mb-4 h-4 w-full" />
                                    <Skeleton className="bg-gray-200 mb-4 h-4 w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:px-2 pb-6">
                        <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
                            <div className="px-6 py-4">
                                <h3 className="text-blue-500 my-2 text-lg lg:text-xl xl:text-2xl font-open">O que você vai aprender?</h3>
                                <div className="grid grid-cols-2 text-gray-500 text-sm gap-x-2">
                                    <Skeleton className="bg-gray-200 mb-4 h-4 w-full" />
                                    <Skeleton className="bg-gray-200 mb-4 h-4 w-full" />
                                    <Skeleton className="bg-gray-200 mb-4 h-4 w-full" />
                                    <Skeleton className="bg-gray-200 mb-4 h-4 w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}