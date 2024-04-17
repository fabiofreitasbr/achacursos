import Banner from './Parts/Home/Banner';
import Categorias from './Parts/Home/Categorias';
import Destaques from './Parts/Home/Destaques';
import Principais from './Parts/Home/Principais';

export default function Home() {
    return (
        <div>
            <Banner />
            <Categorias />
            <Principais />
            <Destaques />
        </div>
    );
}
