import useAuth from "../../Hooks/useAuth";

const LoadingComponent = ({children}) => {
    const {loading} = useAuth()
    if(loading)return <div className="w-full h-full flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    </div>
    return children
};

export default LoadingComponent;