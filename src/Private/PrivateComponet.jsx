import useAuth from "../Hooks/useAuth";

const PrivateComponet = ({children}) => {

    const {user,loading} = useAuth()
    if(!user)return 

    return children
};

export default PrivateComponet;