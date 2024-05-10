import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QueryPage = () => {
    const [posts,setPosts] = useState()
    useEffect(()=>{
        axios.get('http://localhost:5000/queryPost')
        .then(res => {
            setPosts(res.data)
            console.log(res.data);
        })
        .catch(error=> {
            console.log(error.message);
        } )
    },[])
    return (
        <section className='container mx-auto'>
                   <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {
                posts && posts.slice(0,6).map(post => <div key={post._id}>
                    <div className="relative">
                        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
    
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
                    <div className='flex justify-between items-center'>
                        <p>Product Name: {post.productName}</p>
                        <p>Brand Name: {post.brandName}</p>
                    </div>
    
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                       {post.alternationReason}
                    </p>
    
                    <Link to={`/details/${post._id}`} className="inline-block mt-4 text-blue-500  hover:text-blue-400">Recommend</Link>
                </div>)
            }
        </div>
        </section>
    );
};

export default QueryPage;