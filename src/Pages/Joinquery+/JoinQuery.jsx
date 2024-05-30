
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const JoinQuery = () => {
  const data = [
    {
      id: 1,
      title: "CASUAL",
      price: 0,
      feature:['See Unlimited Post','See Unlimited Query','See Other Recommendation']
    },
    {
      id: 2,
      title: "PROFESSIONAL",
      price: 10,
      feature:['See Unlimited Post','See Unlimited Query','See Other Recommendation']
    },
    {
      id: 1,
      title: "EXPERT",
      price: 24.99,
      feature:['See Unlimited Post','See Unlimited Query','See Other Recommendation']
    },
  ];
  
  const { user } = useAuth();
  const handlePlan =async (price) => {
    console.log(price);
    const userInfo = {
      email:user?.email,
      name:user?.displayName,
      planPrice: parseFloat(price)
    }
    axios.post('http://localhost:5000/create-checkout-session',userInfo)
    // axios.post('https://query-rouge.vercel.app/create-checkout-session',userInfo)
    .then(res => {
      console.log(res.data.url);
      window.location = res.data.url
    })
    .catch(err =>{
      console.log(err);
    })
  }
  return (
    <section>
      <div className="bg-stone-200 h-32 flex justify-center">
        <img
          className="translate-y-16 rounded-full w-36 h-36"
          src={user?.photoURL}
          referrerPolicy="no-referrer"
          alt=""
        />
      </div>
      <div className="mt-16">
        <div className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
              {data &&
                data.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                        {item.title}
                      </h2>
                    </div>

                    <div className="flex-shrink-0">
                      <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                        ${item.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </div>

                    <ul className="flex-1 space-y-4">
                      {item?.feature?.map((i,index) =><li key={index} className="text-gray-500 dark:text-gray-400">
                        {i}
                      </li>)}
                    </ul>

                    <button
                    onClick={()=>handlePlan(item.price)}
                     className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                      Start
                    </button>
                  </div>
                ))}

              {/* <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex-shrink-0">
                    <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                        Professional
                    </h2>
                </div>

                <div className="flex-shrink-0">
                    <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                        $24.90
                    </span>
                    
                    <span className="text-gray-500 dark:text-gray-400">
                        /month
                    </span>
                </div>

                <ul className="flex-1 space-y-4">
                    <li className="text-gray-500 dark:text-gray-400">
                        Up to 10 projects
                    </li>

                    <li className="text-gray-500 dark:text-gray-400">
                        Up to 20 collaborators
                    </li>

                    <li className="text-gray-500 dark:text-gray-400">
                        10Gb of storage
                    </li>

                    <li className="text-gray-500 dark:text-gray-400">
                        Real-time collaborations
                    </li>
                </ul>

                <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                    Start free trial
                </button>
            </div>

            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex-shrink-0">
                    <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                        Expert
                    </h2>
                </div>

                <div className="flex-shrink-0">
                    <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                        $49.90
                    </span>

                    <span className="text-gray-500 dark:text-gray-400">
                        /month
                    </span>
                </div>

                <ul className="flex-1 space-y-4">
                    <li className="text-gray-500 dark:text-gray-400">
                        Unlimited projects
                    </li>
                    
                    <li className="text-gray-500 dark:text-gray-400">
                        Unlimited collaborators
                    </li>
                    
                    <li className="text-gray-500 dark:text-gray-400">
                        Unlimited storage
                    </li>
                    
                    <li className="text-gray-500 dark:text-gray-400">
                        Real-time collaborations
                    </li>
                    
                    <li className="text-gray-500 dark:text-gray-400">
                        24x7 Support
                    </li>
                </ul>

                <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                    Start free trial
                </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinQuery;
