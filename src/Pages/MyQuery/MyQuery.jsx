import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import addbg from '../../assets/addbg.png'
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const MyQuery = () => {
    
  const {user} = useAuth()

    const {data,refetch} = useQuery({
        queryKey:['post',user?.email],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/queryPost?email=${user.email}`)
            return res.data
        }
    })

    const handleDelete = (id) => {
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
          axios.delete(`http://localhost:5000/query/${id}`)
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
                <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {
              data && data.map(post => <div key={post._id} className="lg:flex border-2 border-l-0 rounded-xl">
              <div className="relative">
                <img className="object-cover w-full h-56 rounded-lg rounded-r-none " src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                <div className="absolute bottom-0 bg-white px-2 gap-x-2 flex items-center py-1 rounded-tr-lg">
                  <img className="w-12 h-12 rounded-full my-2" src={post.userPhoto} alt="" />
                  <p>{post.name}</p>
                </div>
                  <div className="absolute bottom-1 left-16">
                    <span className="text-sm text-gray-500 dark:text-gray-300">{post.postedDate}</span>
                  </div>
              </div>
              <div className="flex flex-col gap-3 py-6 lg:mx-6">
                  <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                      {post.queryTitle}
                  </a>
                <p>{post.alternationReason}</p>
                <div className="flex justify-between gap-8">
                  <p>Product :{post.productName}</p>
                  <p>Brand :{post.brandName}</p>
                </div>
                <div>


                <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
    <Link to={`/details/${post._id}`}>
    <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

    <span>View</span>
    </button>
    </Link>
    <Link to={`/update/${post._id}`}>
    <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
        <svg xmlns="http://www.w3Lrg/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>

    <span>Update</span>
    </button>
    </Link>

    <button onClick={()=> handleDelete(post._id)} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>

    <span>Delete</span>
    </button>

</div>


                </div>
              </div>
          </div>)
            }
        </div>
    </div>
</section>
            </div>
        </section>
    );
};

export default MyQuery;