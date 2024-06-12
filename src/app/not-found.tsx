import BannerTitle from './Parts/estrutura/BannerTitle'
import Footer from '@/app/Parts/estrutura/Footer';
import FooterCopyright from '@/app/Parts/estrutura/FooterCopyright';
import Menu from '@/app/Parts/estrutura/Menu';

export default function NotFound() {
    return (
        <div>
            <Menu />
            <main>
                <BannerTitle Title="Não encontrado" />
                <div className="flex flex-col items-center justify-between pt-10 pb-20">
                    <div className="flex flex-col">
                        <span className="text-center font-bold my-10 opacity-30">
                            Acha Cursos
                        </span>
                        <div className="flex flex-col items-center">
                            <div className="text-red-800 font-bold text-2xl md:text-5xl">
                                Página Não encontrada
                            </div>
                            <div className="text-sm md:text-lg lg:text-xl  xl:text-2xl  mt-5">
                                Esta página não foi encontrada
                            </div>
                            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                                Tente procurar a página pelo menu de navegação.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <FooterCopyright />
        </div>
    )
}