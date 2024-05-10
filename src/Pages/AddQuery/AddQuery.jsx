import addbg from '../../assets/addbg.png'

const AddQuery = () => {
    return (
        <section className='container mx-auto font-montserrat'>
            <div className="w-full  mx-auto rounded-2xl flex h-fit" style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${addbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'bottom'
                }}>
                    <h1></h1>
                <form className='w-4/5 mx-auto space-y-6 py-7'>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='QueryTItle'>Query Title</label>
                            <br />
                            <input id='QueryTItle' name='queryTitle' type="text" placeholder="Query Title" className="input input-bordered w-full" />
                        </div>
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='productName'>Product Name</label>
                            <br />
                            <input id='productName' name='productName' type="text" placeholder="Product Name" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='brandName'>Brand Name</label>
                            <br />
                            <input id='brandName' name='brandName' type="text" placeholder="Brand Name" className="input input-bordered w-full" />
                        </div>
                    </div>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='BoycottingReasonDetails'>Boycotting Reason</label>
                            <br />
                            <textarea placeholder="Boycotting Reason Details" className="textarea textarea-bordered textarea-lg h-52 w-full" ></textarea>
                        </div>
                        <div className='w-full'>
                            <label className='text-white font-medium' htmlFor='productImg'>Product PhotoURL</label>
                            <br />
                            <input id='productImg' name='brandName' type="url" placeholder="Product PhotoURL" className="input input-bordered w-full" />
                        </div>
                        <button className="text-3xl w-full font-semibold text-white border-2 backdrop-blur-sm px-4 py-2 scale-100 hover:scale-105 transition-all duration-300 rounded-xl hover:text-black hover:bg-white">Add Query</button>
                </form>
                    
            </div>
        </section>
    );
};

export default AddQuery;