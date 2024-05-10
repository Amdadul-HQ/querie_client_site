import axios from "axios";
import { useEffect, useState } from "react";


const Post = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:5000/posts')
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
                        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
    
                        <div className="absolute bottom-0 flex p-3 rounded-tr-lg bg-white dark:bg-gray-900 ">
                            <img className="object-cover object-center w-10 h-10 rounded-full" src={post.UserInfo.imageasthumbnail} alt=""/>
    
                            <div className="mx-4">
                                <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.UserInfo.name}</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{post.DatePosted}</p>
                            </div>
                        </div>
                    </div>
    
                    <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                        {post.QueryTitle}
                    </h1>
    
                    <hr className="w-32 my-6 text-blue-500"/>
    
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                       {post.AlternationReason}
                    </p>
    
                    <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
                </div>)
            }
        </div>
            <div className="grid grid-cols-2 gap-6 my-7">
                {/* {
                    posts && posts.map(post => <div key={post._id} className="p-5 border rounded-lg">
                    <h1 className="my-2">QueryTitle</h1>
                <div>
                    <img className="w-full h-80 rounded-lg" src="https://i.postimg.cc/cHTvRhJL/lan-deng-quddu-d-ZKk-Q-unsplash.jpg" alt="" />
                </div>
                <div>
                    <div className="flex items-center justify-between gap-x-3 my-3">
                        <div className="flex items-center gap-x-2">
                            <img className="w-14 h-14 p-1 border rounded-full" src="https://i.postimg.cc/4xLHqskQ/Sophia-Clark.jpg" alt="" />
                            <p>User Name</p>
                        </div>
                        <div>
                            <p>Posted Date</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                    <p>ProductName</p>
                    <p>BrandName</p>
                    </div>
                    <p>Alternation Reason</p>
                </div>
            </div>)
                } */}
            </div>
        </section>
    );
};

export default Post;