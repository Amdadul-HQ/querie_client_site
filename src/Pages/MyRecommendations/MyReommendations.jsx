import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyReommendations = () => {

    const {user} = useAuth()

    // useEffect(()=>{
    //     axios.get(`http://localhost:5000/recommendationPost?email=${user?.email}`)
    //     .then(res => {
    //         console.log(res.data);
    //         setPosts(res.data)
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     })
    // },[user])
    const {data : posts ,refetch} = useQuery({
        queryKey:['recomendation',user?.email],
        queryFn:async()=> {
          const res =  await axios.get(`http://localhost:5000/recommendationPost?email=${user?.email}`,{withCredentials:true})
            return res.data
        } 
    })


    const handleDelete = id =>{
        console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`http://localhost:5000/recommendation/${id}`)
            .then(res => {
              console.log(res.data);
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch()
            })
            .catch(error => {
              console.log(error.message);
            })
              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
    }


    return (
        <div>
          <Helmet>
            <title>
              Recommendation For Me
            </title>
          </Helmet>
            <div className="mt-4">
                
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl text-black">
        <th>Product Image</th>
        <th>Product Title</th>
        <th>Published Date</th>
        <th>Recommender Email</th>
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
                    <img src={post.recommendProductImg} alt="" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
            <div>
                    <p className="text-xl pb-1 w-fit">{post.recommendQuerieTitle}</p>
                    
                </div>
            </td>
            <td className="text-base text-black">
              {post.recommendDate}
            </td>
            <td className="text-base text-black">{post.recommendUserEmail}</td>
            <td className="text-base text-black">{post.recommendBrandName}</td>
            <th>
            <div className="w-fit bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
    <button onClick={()=> handleDelete(post._id)} className="flex items-center py-1 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
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
            </div>
        </div>
    );
};

export default MyReommendations;