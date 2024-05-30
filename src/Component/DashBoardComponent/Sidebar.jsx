import { BiLogOut } from "react-icons/bi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaHome, FaPodcast } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { MdRecommend } from "react-icons/md";
import { TbMessageCircleStar } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Sidebar = () => {
  const {user,logOut} = useAuth()
  const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.success('Log Out Successful')
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
        })
    }
  return (
    <>
      <div className="bg-black text-white max-w-[280px] min-h-screen">
        <ul className="flex flex-col gap-y-7 px-4 pt-10">
          <NavLink className={({isActive})=> isActive ? 'bg-white py-1 transition-all duration-500 px-3 text-black text-xl flex gap-x-2 items-center font-poppins font-medium': 'hover:bg-white py-1 transition-all duration-500 px-3 hover:text-black text-xl flex gap-x-2 items-center font-poppins font-medium'} to='/dashboard/profile'><FaClipboardUser className="text-3xl" />My Profile</NavLink>
          <NavLink className={({isActive})=> isActive ? 'bg-white py-1 transition-all duration-500 px-3 text-black text-xl flex gap-x-2 items-center font-poppins font-medium': 'hover:bg-white py-1 transition-all duration-500 px-3 hover:text-black text-xl flex gap-x-2 items-center font-poppins font-medium'} to='/dashboard/addqueries'><IoAddCircle className="text-3xl" />Add Queries</NavLink>
          <NavLink className={({isActive})=> isActive ? 'bg-white py-1 transition-all duration-500 px-3 text-black text-xl flex gap-x-2 items-center font-poppins font-medium': 'hover:bg-white py-1 transition-all duration-500 px-3 hover:text-black text-xl flex gap-x-2 items-center font-poppins font-medium'} to='/dashboard/myqueries'><BsFillQuestionCircleFill className="text-3xl" /> My Queries</NavLink>
          <NavLink className={({isActive})=> isActive ? 'bg-white py-1 transition-all duration-500 px-3 text-black text-xl flex gap-x-2 items-center font-poppins font-medium': 'hover:bg-white py-1 transition-all duration-500 px-3 hover:text-black text-xl flex gap-x-2 items-center font-poppins font-medium'} to='/dashboard/myrecommendation'><MdRecommend className="text-3xl" /> My Recommendation</NavLink>
          <NavLink className={({isActive})=> isActive ? 'bg-white py-1 transition-all duration-500 px-3 text-black text-xl flex gap-x-2 items-center font-poppins font-medium': 'hover:bg-white py-1 transition-all duration-500 px-3 hover:text-black text-xl flex gap-x-2 items-center font-poppins font-medium'} to='/dashboard/recommendationforme'><TbMessageCircleStar className="text-3xl" /> Recommended For Me</NavLink>
          <NavLink className={({isActive})=> isActive ? 'bg-white py-1 transition-all duration-500 px-3 text-black text-xl flex gap-x-2 items-center font-poppins font-medium': 'hover:bg-white py-1 transition-all duration-500 px-3 hover:text-black text-xl flex gap-x-2 items-center font-poppins font-medium'} to='/' ><FaHome className="text-3xl" />Home</NavLink>
          <NavLink className={({isActive})=> isActive ? 'bg-white py-1 transition-all duration-500 px-3 text-black text-xl flex gap-x-2 items-center font-poppins font-medium': 'hover:bg-white py-1 transition-all duration-500 px-3 hover:text-black text-xl flex gap-x-2 items-center font-poppins font-medium'} to='/queris' ><FaPodcast className="text-3xl" />Queries</NavLink>
          <NavLink className={ 'hover:bg-white text-white bg-black  py-1 transition-all duration-500 px-3 hover:text-black text-xl flex gap-x-2 items-center font-poppins font-medium'} onClick={handleLogOut} end ><BiLogOut className="text-3xl" /> Logout</NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
