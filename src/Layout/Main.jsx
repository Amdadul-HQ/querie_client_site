
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
        <Header/>
        <div className='min-h-[calc(100vh-318px)]'>
        <Outlet/>
        </div>
        <Footer/> 
        <Toaster />
        </>
    );
};

export default Main;