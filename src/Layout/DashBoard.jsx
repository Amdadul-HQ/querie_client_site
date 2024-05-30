import { Outlet } from "react-router-dom";
import Sidebar from "../Component/DashBoardComponent/Sidebar";

const DashBoard = () => {
    return (
        <section className="flex">
            <div>
                <Sidebar/>
            </div>
            <div className="flex-1">
                <Outlet/>
            </div>
            
        </section>
    );
};

export default DashBoard;