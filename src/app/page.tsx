"use client";
import Footer from './Parts/Footer';
import FooterCopyright from './Parts/FooterCopyright';
import Banner from './Parts/Home/Banner';
import Categorias from './Parts/Home/Categorias';
import Destaques from './Parts/Home/Destaques';
import Principais from './Parts/Home/Principais';
import Menu from './Parts/Menu';

export default function Home() {
    return (
        <div>
            <Menu />
            <main>
                <Banner />
                <Categorias />
                <Principais />
                <Destaques />
            </main>
            <Footer />
            <FooterCopyright />
        </div>
    );
}
