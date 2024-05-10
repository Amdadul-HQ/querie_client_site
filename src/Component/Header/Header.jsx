import { Link } from 'react-router-dom';
import logo from '../../assets/shopnow.png'
const Header = () => {
    return (
        <header className=' container mx-auto'>
            <nav className='font-montserrat mx-auto my-5 flex items-center justify-between'>
                <div className='flex items-center gap-x-3'>
                    <img className='w-10' src={logo} alt="" />
                    <h1 className='text-xl mt-4 text-[#DD752D] font-normal'><span className='text-[#27499C]  font-semibold'>SHOP</span> NOW</h1>
                </div>
                <div className='space-x-10 font-poppins text-xl font-normal'>
                    <Link to='/'>Home</Link>
                    <Link to='/queris'>Queris</Link>
                    {/* <Link to='/addquery'>Add Queries</Link> */}
                    <Link to='/myqueries'>My Queries</Link>
                    <Link to='/myrecommendations'>My Recommendation</Link>
                </div>
                <div>
                    <Link to='/login'>Login</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;