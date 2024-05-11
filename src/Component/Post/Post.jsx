import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Post = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:5000/queryPost')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err.message);
        })


    },[])

    return (
        <section className="font-montserrat my-20 container mx-auto">
            <h1 className="text-3xl text-center font-semibold">Recently Post</h1>
            <p className="text-xl max-w-[1100px] mt-4 text-center mx-auto">Welcome to TechZone Hub, where technology meets innovation! <br /> Explore the latest trends, reviews, and guides on gadgets, smartphones, laptops, wearables, and more.</p>
            
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {
                posts && posts.slice(0,6).map(post => <div key={post._id}>
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
    
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                       {post.alternationReason.slice(0,200)}...
                    </p>
    
                    <Link to={`/details/${post._id}`} className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</Link>
                </div>)
            }
        </div>
        </section>
    );
};

export default Post;