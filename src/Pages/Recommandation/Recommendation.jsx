import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";


const Recommendation = () => {
    const {user} = useAuth()
    const [posts,setPosts] = useState()
    useEffect(()=> {
        axios.get(`http://localhost:5000/myrecommendation?email=${user?.email}`)
        .then(res => {
            setPosts(res.data)
            
        })
        .catch(error => {
            console.log(error.message);
        })
    },[user])
    return (
        <div>
            <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl text-black">
        <th>Product Details</th>
        <th>Published Date</th>
        <th>Product Name</th>
        <th>Product Brand</th>
        <th >Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        posts && posts.map(post => <tr key={post._id}>
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
                    <p className="text-base">{post.queryTitle}</p>
                  </div>
                </div>
              </div>
            </td>
            <td className="text-base text-black">
              {post.postedDate}
            </td>
            <td className="text-base text-black">{post.recommendUserEmail}</td>
            <td className="text-base text-black">{post.brandName}</td>
            <th>
            <div className="w-fit bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
    <button className="flex items-center py-1 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>

        <span>Delete</span>
    </button>
</div>

            </th>
          </tr>)
      }
    </tbody>
  </table>
        </div>
    );
};

export default Recommendation;