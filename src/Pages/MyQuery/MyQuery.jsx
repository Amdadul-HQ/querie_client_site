import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import addbg from '../../assets/addbg.png'
import { Link } from "react-router-dom";


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
        <section className="container mx-auto font-montserrat">
            <div className="w-full h-80 mx-auto rounded-2xl flex justify-center items-center" style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${addbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'bottom'
                }}>
                    <Link to='/addquery'><button className="text-3xl font-semibold text-white border-2 backdrop-blur-sm px-4 py-2 scale-95 hover:scale-105 transition-all duration-300 rounded-xl hover:text-black hover:bg-white">Add Query</button></Link>
            </div>
        </section>
    );
};

export default MyQuery;