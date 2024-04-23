import Template from './(pages)/template';
import Banner from './Parts/Home/Banner';
import Categorias from './Parts/Home/Categorias';
import Destaques from './Parts/Home/Destaques';
import Principais from './Parts/Home/Principais';

export default function Home() {
    return (
        <div>
            <Template>
                <Banner />
                <Categorias />
                <Principais />
                <Destaques />
            </Template>
        </div>
    );
}
