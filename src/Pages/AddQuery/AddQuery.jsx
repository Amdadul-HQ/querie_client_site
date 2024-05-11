import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import addbg from '../../assets/addbg.png'

const AddQuery = () => {

    const {user} = useAuth()


    const handleAddPost = e => {
        e.preventDefault()

        const form = e.target;
        const email = user.email;
        const name = user.displayName;
        const userPhoto = user.photoURL;
        const currentDate = new Date()
        const postedDate = currentDate.toLocaleString()
        const queryTitle = form.queryTitle.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const alternationReason = form.boycottingReason.value;
        const productImg = form.productImg.value;
        const recommendationCount = 0;
        
        
        const queryPost = {productImg,queryTitle,productName,brandName,alternationReason,postedDate,email,name,userPhoto,recommendationCount}
       console.log(queryPost);
        axios.post('http://localhost:5000/queryPost',queryPost,{withCredentials:true})
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error.message);
        })

    }


    return (
        <section className='container mx-auto font-montserrat'>
            <div className="w-full  mx-auto rounded-2xl flex h-fit" style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${addbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'bottom'
                }}>
                    <h1></h1>
                <form onSubmit={handleAddPost} className='w-4/5 mx-auto space-y-6 py-7'>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='QueryTItle'>Query Title</label>
                            <br />
                            <input required id='QueryTItle' name='queryTitle' type="text" placeholder="Query Title" className="input input-bordered w-full" />
                        </div>
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='productName'>Product Name</label>
                            <br />
                            <input required id='productName' name='productName' type="text" placeholder="Product Name" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='brandName'>Brand Name</label>
                            <br />
                            <input required id='brandName' name='brandName' type="text" placeholder="Brand Name" className="input input-bordered w-full" />
                        </div>
                    </div>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='BoycottingReasonDetails'>Boycotting Reason</label>
                            <br />
                            <textarea required name='boycottingReason' placeholder="Boycotting Reason Details" className="textarea textarea-bordered textarea-lg h-52 w-full" ></textarea>
                        </div>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='productImg'>Product PhotoURL</label>
                            <br />
                            <input required id='productImg' name='productImg' type="url" placeholder="Product PhotoURL" className="input input-bordered w-full" />
                        </div>
                        <button type='submit' className="text-3xl w-full font-semibold text-white border-2 backdrop-blur-sm px-4 py-2 scale-100 hover:scale-105 transition-all duration-300 rounded-xl hover:text-black hover:bg-white">Add Query</button>
                </form>
                    
            </div>
        </section>
    );
};

export default AddQuery;