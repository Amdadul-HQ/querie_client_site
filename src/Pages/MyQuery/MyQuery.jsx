import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import addbg from '../../assets/addbg.png'
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";


const MyQuery = () => {
    

    const {data} = useQuery({
        queryKey:['post'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/posts')
            return res.data
        }
    })
    // const posts = data

    return (
        <section className="container mx-auto font-poppins">
            <div className="w-full h-80 mx-auto rounded-2xl flex justify-center items-center" style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${addbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'bottom'
                }}>
                    <Link to='/addquery'><button className="text-3xl font-semibold text-white border-2 backdrop-blur-sm px-4 py-2 scale-95 hover:scale-105 transition-all duration-300 rounded-xl hover:text-black hover:bg-white">Add Query</button></Link>
            </div>
            <div className="mt-4">
                <h1 className="text-center font-medium text-3xl border-b-2 border-black w-fit mx-auto pb-2">My Query List</h1>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl text-black">
        <th>Product Details</th>
        <th>Published Date</th>
        <th>Product Name</th>
        <th>Product Brand</th>
        <th className="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data && data.map(post => <tr key={post._id}>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-36 h-36 rounded-xl">
                    <img src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">
                    <p className="text-xl pb-1 border-b-2 mb-3 border-black w-fit">Query Title</p>
                    <p className="text-base">{post.QueryTitle}</p>
                  </div>
                </div>
              </div>
            </td>
            <td className="text-base text-black">
              {new Date(post.DatePosted).toLocaleDateString()}
            </td>
            <td className="text-base text-black">{post.ProductName}</td>
            <td className="text-base text-black">{post.BrandName}</td>
            <th>
            <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
    <button className="flex items-center py-1 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-1 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

        <span>View</span>
    </button>

    <button className="flex items-center first:py-1 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-1 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round"  strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>

        <span>Update</span>
    </button>

    <button className="flex items-center py-1 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-1 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>

        <span>Delete</span>
    </button>
</div>
              {/* <div className="text-3xl space-x-5 text-center">
                
                <button data-tooltip-content="View Details" data-tooltip-place="top" data-tooltip-id="my-tooltip" className="p-2 hover:bg-blue-500 text-gray-100 bg-blue-700 hover:text-slate-800 rounded-lg"><IoMdEye /></button>
                <button data-tooltip-content="Update" data-tooltip-place="top" data-tooltip-id="my-tooltip" className="p-2 hover:bg-lime-500 text-gray-100 bg-lime-700 hover:text-slate-800 rounded-lg"><CiEdit/></button>
                <button data-tooltip-content="Delete" data-tooltip-place="top" data-tooltip-id="my-tooltip" className="p-2 hover:bg-red-500 text-gray-100 bg-red-700 hover:text-slate-800 rounded-lg"><MdDelete /></button>
              </div> */}
            </th>
          </tr>)
      }
    </tbody>
    <Tooltip id="my-tooltip" />
  </table>
</div>
            </div>
        </section>
    );
};

export default MyQuery;