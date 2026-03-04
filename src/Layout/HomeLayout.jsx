import { Outlet } from 'react-router';
import Header from '../Componentes/Header';
import LeatestNews from './LeatestNews';
import Navbar from '../Componentes/Navbar';
import LeftAside from '../Componentes/HomePageComponte/LeftAside.jsx';
import RightAside from '../Componentes/HomePageComponte/RightAside.jsx';

const HomeLayout = () => {
      return (
            <div>
                  <header className='mt-5 w-11/12 mx-auto'>
                        <Header></Header>
                        <section className=' my-5'>
                              <LeatestNews></LeatestNews>
                        </section>
                        <nav>
                              <Navbar></Navbar>
                        </nav>
                  </header>
                  <main className='w-11/12 gap-5 mx-auto grid grid-cols-12'>
                        <aside className='col-span-3'>
                              <LeftAside></LeftAside>
                        </aside>
                        <div className="main-section col-span-6">
                              <Outlet></Outlet>
                        </div>
                        <aside className='col-span-3'>
                              <RightAside></RightAside>
                        </aside>
                  </main>
            </div>
      );
};

export default HomeLayout;