import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hook/useAdmin";




const Dashboard = () => {
    // const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400 text-black py-10">
                <ul className="menu p-4">
                    <button className="btn btn-primary mb-5">SignOut</button>
                    <li><NavLink to='/dashboard/sendMoney'>Send Money</NavLink></li>
                    <li><NavLink to='/dashboard/cashOut'>Cash-Out</NavLink></li>
                    <li><NavLink to='/dashboard/cashin'>Cash-in</NavLink></li>
                    <li><NavLink to='/dashboard/balanceInquiry'>Balance Inquiry</NavLink></li>
                    <li><NavLink to='/dashboard/transactionsHistory'>Transactions History</NavLink></li>
                   

                    <div className="divider"></div>
                    {/* sheired nav link */}
                    {/* {isAdmin && <> <li><NavLink to='/dashboard/allUser'>  All user</NavLink></li>
                        <li><NavLink to='/dashboard/allPets'> All Pets</NavLink></li>
                        <li><NavLink to='/dashboard/allDonations'> All Donations</NavLink></li>
                    </>
                    } */}
                </ul>
            </div>
            {/* dashboard contant */}
            <div className="flex-1 p-8">
               
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;