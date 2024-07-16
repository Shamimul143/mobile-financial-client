import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../layout/Dashboard";
import SendMoney from "../pages/user/SendMoney";
import HomePage from "../pages/HomePage";
import CashOut from "../pages/user/CashOut";
import Cashin from "../pages/user/Cashin";
import BalanceInquiry from "../pages/user/BalanceInquiry";
import TransactionsHistory from "../pages/user/TransactionsHistory";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Login></Login>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
     
        {
            path:"/homePage",
            element:<HomePage></HomePage>
        },
      
      ]
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"sendMoney",
                element:<SendMoney></SendMoney>
            },
            {
                path:"cashOut",
                element:<CashOut></CashOut>
            },
            {
                path:"cashin",
                element:<Cashin></Cashin>
            },
            {
                path:"balanceInquiry",
                element:<BalanceInquiry></BalanceInquiry>
            },
            {
                path:"transactionsHistory",
                element:<TransactionsHistory></TransactionsHistory>
            },
        ]
    },
  ]);