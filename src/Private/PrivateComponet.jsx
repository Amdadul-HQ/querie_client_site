import useAuth from "../Hooks/useAuth";

const PrivateComponet = ({children}) => {

    const {user} = useAuth()


    return children
};

export default PrivateComponet;