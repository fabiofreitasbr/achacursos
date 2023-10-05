import type { Metadata } from 'next'


import Menu from '../Parts/Menu'
import Footer from '../Parts/Footer';
import FooterCopyright from '../Parts/FooterCopyright';
import BannerTitle from '../Parts/BannerTitle';

export const metadata: Metadata = {
    title: 'Fábio Freitas',
    description: 'Publicidade e Produção',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Menu />
            <BannerTitle Title="Presets" />
            {children}
            <Footer />
            <FooterCopyright />
        </>
    )
}
