import BannerTitle from './Parts/estrutura/BannerTitle'
import Footer from '@/app/Parts/estrutura/Footer';
import FooterCopyright from '@/app/Parts/estrutura/FooterCopyright';
import Menu from '@/app/Parts/estrutura/Menu';
import NotFoundComponent from './Parts/estrutura/notFoundComponent';

export default function NotFound() {
    return (
        <div>
            <Menu />
            <NotFoundComponent />
            <Footer />
            <FooterCopyright />
        </div>
    )
}