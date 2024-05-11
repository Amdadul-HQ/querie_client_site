import {  NavLink } from 'react-router-dom';
import logo from '../../assets/shopnow.png'
import './Header.css'
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';
import { useEffect, useState } from 'react';
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
    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" );

    const handleToggle = (e) => {
        if(e.target.checked){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    useEffect(()=>{
        localStorage.setItem("theme",theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme",localTheme)
    },[theme])

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
                    {user && <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3' : 'px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/myqueries'>My Queries</NavLink>}
                    {user && <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3' : 'px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/recommendforme'>Recommend For Me</NavLink>}
                    {user && <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3' : 'px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/myrecommendation'>My Recommendation</NavLink>}
                </div>
                <div className='flex items-center gap-x-3'>
                    
                    {
                        user ? <></> : <NavLink className={({isActive})=> isActive ? 'bg-black text-white transition-all duration-300 py-1 px-3 text-xl' : 'text-xl px-3 transition-all py-1 duration-300 hover:bg-black hover:text-white'} to='/login'>Login</NavLink>
                    }
                    <div>
                    <label  className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                    {
                        user && <div className="dropdown md:hidden lg:flex hidden dropdown-end z-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div id="clickable" className="w-10 rounded-full">
                            <img className="w-10 h-10 rounded-full " data-tooltip-id="my-tooltip" data-tooltip-place="right" data-tooltip-content={user?.displayName}  src={user?.photoURL || <FaUser className="text-2xl"></FaUser>} alt="" />
                            </div>
                        </div>
                            <Tooltip className="z-50" anchorSelect="#clickable" data-tooltip-place="left"  clickable>
                                <button className="z-50" onClick={handleLogOut}><NavLink className="md:hidden lg:flex hidden" >Log Out</NavLink></button>
                            </Tooltip>
                        
                        </div>
                    }
                    
                </div>
                <Tooltip id='my-tooltip' />
            </nav>
        </header>
    );
};

export default Header;