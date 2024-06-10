
import Footer from '../Parts/Footer';
import FooterCopyright from '../Parts/FooterCopyright';
import Menu from '../Parts/Menu';

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