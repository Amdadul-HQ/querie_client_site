
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/> 
        <Toaster />
        </>
    );
};

export default Main;