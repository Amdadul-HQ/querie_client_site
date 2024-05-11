import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const Details = () => {
    const post = useLoaderData()
    const {user} = useAuth()

    const {_id,productImg,queryTitle,productName,brandName,alternationReason,postedDate,email,name,userPhoto,recommendationCount} = post


    const handleRecommend = e => {
        e.preventDefault()
        const form = e.target;
        const recommendQuerieTitle = form.recommendation_title.value;
        const recommendProductName = form.productName.value;
        const recommendBrandName = form.brandName.value;
        const recommendReasonDetails = form.RecommendReason.value;
        const recommendProductImg = form.productImg.value;
        const recommendUserEmail = user.email;
        const recommendUserName = user.displayName;
        const recommendUserPhoto = user.photoURL;
        const userEmail = email;
        const userName = name;
        const queryId = _id;
        const title = queryTitle;
        const productname = productName;
        const currentDate = new Date()
        const recommendDate = currentDate.toLocaleString()

        if(user?.email === userEmail){
            return toast.error("You can't Recommand Your Self!!")
        }

        const recommendData = {
           userName,queryId,title,productname,recommendDate,recommendQuerieTitle,recommendBrandName,recommendProductName,recommendReasonDetails,recommendProductImg,recommendUserEmail,recommendUserName,recommendUserPhoto,userEmail
        }
        axios.post('http://localhost:5000/recommendationPost',recommendData)
        .then(res => {
            console.log(res.data);
            toast.success('Recommendation Successful')
        })
        .catch(error => {
            console.log(error.message);
            toast.error(error.message.split('/')[1].split(')')[0])
        })

        console.log(recommendData);


    }
    return (
        <section className="font-montserrat container mx-auto flex ">
           <div className="w-1/2">
                <h1 className="text-3xl font-semibold text-center mb-10">Querie Details</h1>
           <div className="w-full border overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-96" src={productImg} alt="Article"/>

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{productName}</span>
                        <p className="text-xl">{brandName}</p>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{queryTitle}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{alternationReason}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={userPhoto} alt="Avatar"/>
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200"  role="link">{name}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{postedDate}</span>
                        </div>
                        <div className="mt-6 text-2xl font-semibold">
                            Recommendation:
                            {recommendationCount}
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <div className="w-1/2">
            <h1 className="text-3xl font-semibold text-center ">Recommendation Form</h1>
            <div>
            <form onSubmit={handleRecommend}  className='w-4/5 mx-auto space-y-6 py-7 text-black'>
                        <div className='w-full text-black'>
                            <label className=' font-medium' htmlFor='QueryTItle'>Recommendation Query Title</label>
                            <br />
                            <input required id='QueryTItle' name='recommendation_title' type="text" placeholder="Query Title" className="input mt-3 input-bordered w-full" />
                        </div>
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <label className=' font-medium ' htmlFor='productName'>Product Name</label>
                            <br />
                            <input required id='productName' name='productName' type="text" placeholder="Product Name" className="input mt-3 input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className=' font-medium ' htmlFor='brandName'>Brand Name</label>
                            <br />
                            <input required id='brandName' name='brandName' type="text" placeholder="Brand Name" className="input mt-3 input-bordered w-full" />
                        </div>
                    </div>
                        <div className='w-full'>
                            <label className=' font-medium ' htmlFor='recommendReasonDetails'>Recommendation Reason</label>
                            <br />
                            <textarea  id="recommendReasonDetails" required name='RecommendReason' placeholder="Recommendation Reason Details" className="textarea mt-3 textarea-bordered textarea-lg h-52 w-full" ></textarea>
                        </div>
                        <div className='w-full'>
                            <label className=' font-medium ' htmlFor='productImg'>Product PhotoURL</label>
                            <br />
                            <input required id='productImg' name='productImg' type="url" placeholder="Product PhotoURL" className="input mt-3 input-bordered w-full" />
                        </div>
                        <button type='submit' className="text-3xl w-full font-semibold text-black border-2 backdrop-blur-sm px-4 py-2 scale-100 hover:scale-105 transition-all duration-300 rounded-xl hover:text-white hover:bg-black">Recommend</button>
                </form>
            </div>
           </div>

        </section>
    );
};

export default Details;