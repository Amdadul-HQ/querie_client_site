import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const QueryPage = () => {
    const {setLoading} = useAuth()
    const [search,setSearch] = useState("")
    const [itemPerPage,setItemPerPage] = useState(6)
    const [currentPage,setCurrentPage] = useState(1)
    const [count,setCount] = useState(0)
    const [posts,setPosts] = useState()
    const[changeLayout,setChangeLayout] = useState(true)

    useEffect(()=>{
        axios.get(`https://query-rouge.vercel.app/queryallpost?page=${currentPage}&size=${itemPerPage}&search=${search}`)
        .then(res => {
            setPosts(res.data.sort((a,b)=> new Date(b.postedDate) - new Date(a.postedDate)))
            setLoading(false)
        })
        .catch(error=> {
            console.log(error.message);
        } )
    },[currentPage, itemPerPage, search, setLoading])
    useEffect(()=>{
        axios.get(`https://query-rouge.vercel.app/queryCount`)
        .then(res => {
            setCount(res.data.count)
        })
        .catch(error=> {
            console.log(error.message);
        } )
    },[])

    const pages = [...Array(Math.ceil( parseInt(count) / itemPerPage)).keys()].map(element => element + 1)

    const handleChange = () => {
        setChangeLayout(!changeLayout)
    }

    const handlePagenation = (pageNum) => {
        setCurrentPage(pageNum)
    }
    const handlePrvBtn = () => {
        if(currentPage>1){
            handlePagenation(currentPage - 1)
        }
    }
    const handleNextBtn = () => {
        if(currentPage<pages.length){
            handlePagenation(currentPage+1)
        }
    }



    const handleSearch = e => {
        e.preventDefault()
        setSearch(e.target.search.value)
    }
    const handleReset = () => {
        setSearch('')
    }

    return (
        <section className='container mx-auto font-poppins'>
            <Helmet>
                <title>
                    All Query
                </title>
            </Helmet>
            <div className='flex gap-x-1 lg:gap-x-3 justify-center'>
            <form onSubmit={handleSearch} className='flex items-center justify-center gap-x-1 lg:gap-x-4'>
                <div>
                    <label className="input input-bordered flex mx-auto items-center gap-2">
                        <input type="search" name='search' className="lg:grow" placeholder="Search Product Name" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div className='flex'>
                    <button type='submit' className='text-xl text-black hover:text-white hover:bg-black border-2 border-black transition duration-300 lg:px-5 px-2 py-2 rounded-lg'>Search</button>
                </div>
            </form>
            <div>
                <button onClick={handleReset} className='text-xl text-black hover:text-white hover:bg-black border-2 border-black transition duration-300 lg:px-5 px-2 py-2 rounded-lg'>Reset</button>
            </div>
            </div>
                <div className='lg:flex my-5 ml-5 hidden'>
                    <button onClick={handleChange} className='text-xl text-black hover:text-white hover:bg-black border-2 border-black transition duration-300 lg:px-5 px-2 py-2 rounded-lg'>Change Layout</button>
                </div>
                   <div className={`grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 ${changeLayout ? 'xl:grid-cols-3' : 'xl:grid-cols-2'}`}>
            {
                posts && posts.slice(0,6).map(post => <div className="border p-5 rounded-xl" key={post._id}>
                    <div className="relative">
                        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={post.productImg} alt=""/>
    
                        <div className="absolute bottom-0 flex p-3 rounded-tr-lg bg-white dark:bg-gray-900 ">
                            <img className="object-cover object-center w-10 h-10 rounded-full" src={post.userPhoto} alt=""/>
    
                            <div className="mx-4">
                                <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.name}</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{post.postedDate}</p>
                            </div>
                        </div>
                    </div>
    
                    <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                        {post.queryTitle}
                    </h1>
    
                    <hr className="w-32 my-6 text-blue-500"/>
                    <div className='flex font-medium justify-between items-center'>
                        <p>Product Name: {post.productName}</p>
                        <p>Brand Name: {post.brandName}</p>
                    </div>
    
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                       {post.alternationReason.slice(0,200)}...
                    </p>
    
                    <Link to={`/details/${post._id}`} className="inline-block mt-4 text-blue-500  hover:text-blue-400">View Details</Link>
                </div>)
            }
        </div>

        <div className="flex justify-center my-10">
    <button disabled={currentPage ==1} onClick={handlePrvBtn}  className="px-4 py-2 mx-1 text-gray-500 capitalize hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white transition-all bg-white rounded-md dark:bg-gray-800 dark:text-gray-600">
        <div className="flex items-center -mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>

            <span className="mx-1">
                previous
            </span>
        </div>
    </button>

    {
        pages && pages.map((page,inx) => <button onClick={() => handlePagenation(page)} key={inx}  className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 ${currentPage == page && 'bg-blue-500 text-white'} hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}>
        {page}
    </button>)
    }

    <button disabled={currentPage == pages.length} onClick={handleNextBtn} className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        <div className="flex items-center -mx-1">
            <span className="mx-1">
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
    </button>
    
{/* <select value={itemPerPage} onChange={handleItemsPerPage} className="select select-bordered w-fit">
  <option disabled selected>Select Per Page Query</option>
  <option value="2" >2</option>
  <option value="3" >3</option>
  <option value="6" >6</option>
</select> */}
</div>
        </section>
    );
};

export default QueryPage;