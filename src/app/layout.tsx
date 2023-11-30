import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Acha Cursos',
    description: 'Publicidade e Produção',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-M07DWZJBEH');
                `}
                </Script>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M07DWZJBEH" />
                {children}
            </body>
        </html>
    )
}
