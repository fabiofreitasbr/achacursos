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
            <div className="bg-gray-200 rounded-xl h-full overflow-hidden">
                <Skeleton className="bg-gray-900 h-[166px] w-full" />
                <div className="px-3 md:px-6 pt-3 md:pt-6 pb-2 md:pb-4 uppercase">
                    <Skeleton className="bg-gray-900 h-4 my-2 w-full" />
                    <Skeleton className="bg-gray-900 h-4 my-2 w-full" />
                    <Skeleton className="bg-gray-900 h-4 my-2 w-full" />
                </div>
            </div>
        </div>
    )
}
export function LoadingRecentesSingle() {
    return (
        <div className="w-full py-2">
            <div className="rounded-xl bg-gray-100 overflow-hidden shadow-lg shadow-gray-300 flex">
                <Skeleton className="bg-gray-900 h-[108px] w-1/3" />
                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                    <Skeleton className="bg-gray-900 h-4 my-2 w-full" />
                    <Skeleton className="bg-gray-900 h-4 my-2 w-full" />
                    <Skeleton className="bg-gray-900 h-4 my-2 w-full" />
                </div>
            </div>
        </div>
    )
}


export default function LoadingCursos() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
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