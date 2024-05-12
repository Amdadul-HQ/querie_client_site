import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const QueryPage = () => {
    // const [search,setSearch] = useState()
    const [posts,setPosts] = useState()
    const[changeLayout,setChangeLayout] = useState(true)
    useEffect(()=>{
        axios.get('https://query-rouge.vercel.app/queryPost')
        .then(res => {
            setPosts(res.data.sort((a,b)=> new Date(b.postedDate) - new Date(a.postedDate)))
            // console.log(res.data.sort((a,b)=> new Date(b.postedDate) - new Date(a.postedDate)));
        })
        .catch(error=> {
            console.log(error.message);
        } )
    },[])

    const handleChange = () => {
        setChangeLayout(!changeLayout)
    }

    // const handleSearch = e => {
    //     e.preventDefault()
    //     setSearch(e.target.search.value)
    //     axios.get(`https://query-rouge.vercel.app/searchPost?search=${search}`)
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     })
    // }
    

    // function sortByPostedDateAscending(a, b) {
    //     const dateA = new Date(a.postedDate);
    //     const dateB = new Date(b.postedDate);
    //     return dateA - dateB;
    // }

    // const sortedDate = posts.sort(sortByPostedDateAscending)
    // console.log(sortedDate);


    // const customSort = (a, b) => new Date(b.postedDate) - new Date(a.postedDate);

    // const sortDate = posts.sort((a,b)=> new Date(b.postedDate) - new Date(a.postedDate))
    
    // console.log(sortDate);

    // const dates = ["2024-05-11", "2023-03-15", "2022-09-30"];
// const sortedDates = dates.sort((a, b) => new Date(b) - new Date(a));


    return (
        <section className='container mx-auto font-poppins'>
            <Helmet>
                <title>
                    All Query
                </title>
            </Helmet>
            <form  className='flex items-center justify-center gap-x-4'>
                <div>
                    <label className="input input-bordered flex mx-auto items-center gap-2">
                        <input type="search" name='search' className="grow" placeholder="Search Product Name" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div className='flex'>
                    <button type='submit' className='text-xl text-black hover:text-white hover:bg-black border-2 border-black transition duration-300 lg:px-5 px-2 py-2 rounded-lg'>Search</button>
                </div>
            </form>
                <div className='flex my-5 ml-5'>
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
        </section>
    );
};

export default QueryPage;