import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/shopnow.png'
import './Header.css'
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';
const Header = () => {
    const {user,logOut} = useAuth()
    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.success('Log Out Successful')
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <header className=' container mx-auto'>
            <nav className='font-montserrat mx-auto my-5 flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className='w-10' src={logo} alt="" />
                    <h1 className='text-3xl font-poppins mt-1 font-normal'><span className=' text-stroke font-semibold'>UERIE</span></h1>
                </div>
                <div className='space-x-10 font-poppins text-xl font-normal'>
                    <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3' : 'px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3' : 'px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/queris'>Queris</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3' : 'px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/myqueries'>My Queries</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3' : 'px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/recommendforme'>Recommend For Me</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3' : 'px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/myrecommendation'>My Recommendation</NavLink>
                </div>
                <div className='flex items-center gap-x-3'>
                    {
                        user ? <button onClick={handleLogOut}>Log out</button> : <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3' : 'px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/login'>Login</NavLink>
                    }
                    {
                        user && <img data-tooltip-content={user.email} data-tooltip-place="top" data-tooltip-id="my-tooltip" className='w-14 h-14 p-1 rounded-full border' src={user.photoURL}/>
                    }
                </div>
                <Tooltip id='my-tooltip' />
            </nav>
        </header>
    );
};

export default Header;