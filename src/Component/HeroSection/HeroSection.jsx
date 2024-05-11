

const HeroSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
    <div className="max-w-6xl px-6 py-10 mx-auto">

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-gray-900 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6 bg-[rgba(39,39,39,0.05)] md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://hiacode.com/hubfs/Imported_Blog_Media/iStock-497254373-e1529676396431-1.jpg" alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <div>
                        <p className="text-xl font-medium tracking-tight text-white">Helping Hand For Grow Up</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">suggests a supportive initiative aimed at aiding individuals in their journey of personal growth and development. This program or service could encompass mentorship</p>
                    
                </div>
            </div>
        </main>
    </div>
</section>
    );
};

export default HeroSection;