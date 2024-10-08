import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export async function ProductRecents() {
    const { data } = await axios.get(process.env.local_api + "cursos/recentes");
    return (
        <div>
            {
                data.map((artigoCurrent: any) => (
                    <div key={artigoCurrent.slug} className="w-full py-2">
                        <Link href={"/curso/" + artigoCurrent.slug}>
                            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex">
                                <div className="w-1/3">
                                    <Image className="w-full h-full overflow-hidden object-cover" alt={artigoCurrent.title} width={103} height={108} src={"/img/" + artigoCurrent.image} />
                                </div>
                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                    <h4 className="text-xs text-orange">
                                        {artigoCurrent.title}
                                    </h4>
                                    <h3 className="text-base text-blue-500 hover:text-red-500 font-medium">{artigoCurrent.subtitle}</h3>
                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                        VER MAIS
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}