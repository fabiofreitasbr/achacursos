"use client";
import Banner from './Parts/Banner';
import Videos from './Parts/Videos';
import Menu from './Parts/Menu'
import Footer from './Parts/Footer';
import FooterCopyright from './Parts/FooterCopyright';

export default function Home() {
  return (
    <div>
      <Menu />
      <Banner />
      <Videos />
      <Footer />
      <FooterCopyright />
    </div>
  );
}
