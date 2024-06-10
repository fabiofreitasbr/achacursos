
import Footer from '@/app/Parts/estrutura/Footer';
import FooterCopyright from '@/app/Parts/estrutura/FooterCopyright';
import Menu from '@/app/Parts/estrutura/Menu';

export default function Template({ children }: any) {
    return (
        <div>
            <Menu />
            <main>
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        {children}
                    </div>
                </section>
            </main>
            <Footer />
            <FooterCopyright />
        </div>
    )
}