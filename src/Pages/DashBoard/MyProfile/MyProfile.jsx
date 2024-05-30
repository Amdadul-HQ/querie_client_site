import { RiVerifiedBadgeFill } from "react-icons/ri";
import PageHeading from "../../../Component/PageHeading/PageHeading";
import useAuth from "../../../Hooks/useAuth";
import { VscUnverified } from "react-icons/vsc";
import { useState } from "react";
import { imageUpload } from "../../../../Utlits";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user,updateUser } = useAuth();
  const[showUpdate,setShowUpdate] = useState(false)
  const handleShowUpdate = () => {
    setShowUpdate(true)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const name = form.fullName.value;
    const image = form.image.files[0]
    try{
      const imageURL = await imageUpload(image)
      const res = await updateUser(name,imageURL)
        console.log(res);
        setShowUpdate(false)
        toast.success('Profile Update Successful')
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <div className="bg-stone-300 py-4">
        <PageHeading heading={showUpdate ? 'Update Profile' : 'My Profile'} subheading={showUpdate ? 'Update Info' : 'Personal Info'} />
      </div>
      {
        showUpdate || <div className="flex items-center flex-col bg-stone-300 max-w-xl border-black mx-auto mt-36 border-2 rounded-xl ">
        <div className="mt-8 border w-fit rounded-full border-black flex justify-center">
            <img src={user?.photoURL} className="w-40 h-40 p-4 rounded-full" referrerPolicy="no-referrer" alt="" />
        </div>
        <div className="font-poppins mb-6">
            <h3 className="text-xl mt-3">User Name: {user?.displayName}</h3>
            <p className="flex items-center gap-x-2 text-xl mt-2">Email : {user?.email} {user?.emailVerified ? <RiVerifiedBadgeFill /> : <VscUnverified /> }</p>
            <p className="text-xl mt-2">Account Created : {user?.metadata?.creationTime}</p>
        </div>
      </div>
      }
      <div className="flex justify-center mt-3">
        {
            showUpdate || 
        <button onClick={handleShowUpdate} className="font-montserrat text-2xl text-center font-semibold text-white hover:bg-white hover:text-black border-2 transition-all duration-500 border-black bg-black py-2 px-3">Update Profile</button>
        }
      </div>
      {
        showUpdate && <form onSubmit={handleSubmit} className="border-2 mt-36 border-black max-w-xl rounded-lg mx-auto p-5">
            <div className="max-w-xl mx-auto flex flex-col mt-4">
    <label htmlFor="username" className="block text-xl font-poppins text-gray-500 dark:text-gray-300">Username</label>

    <input required type="text" placeholder="Full Name" name="fullName" className="block bg-gray-50  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
</div>
<div className="max-w-xl mx-auto flex flex-col mt-8">
<label htmlFor="image" className="block text-xl font-poppins text-gray-500 dark:text-gray-300">Select your Profile</label>
<input required type="file" name="image" id='image' placeholder="Select a profile" className="file-input file-input-bordered w-full" />
</div>
<div className="flex justify-center mt-3">
<button type="submit" className="font-montserrat text-2xl text-center font-semibold text-white hover:bg-white hover:text-black border-2 transition-all duration-500 border-black bg-black py-2 px-3">Update Profile</button>

</div>
        </form>
      }
    </>
  );
};

export default MyProfile;
