import { NavLink } from "react-router-dom";
// import useAdmin from "../hook/useAdmin";


const HomePage = () => {
    // const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400 text-black py-10">
                <ul className="menu p-4">
                    <li><NavLink to='/sendMoney'>Send Money</NavLink></li>
                   

                    <div className="divider"></div>
                    {/* sheired nav link */}
                    {/* {isAdmin && <> <li><NavLink to='/dashboard/allUser'>  All user</NavLink></li>
                        <li><NavLink to='/dashboard/allPets'> All Pets</NavLink></li>
                        <li><NavLink to='/dashboard/allDonations'> All Donations</NavLink></li>
                    </>
                    } */}
                </ul>
            </div>
          
        </div>
    );
};

export default HomePage;