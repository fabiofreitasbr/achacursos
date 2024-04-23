
import Footer from '../Parts/Footer';
import FooterCopyright from '../Parts/FooterCopyright';
import Menu from '../Parts/Menu';

export default function Template({children}: any) {
    return(
        <div>
            <Menu />
            <main>
                {children}
            </main>
            <Footer />
            <FooterCopyright />
        </div>
    )
}