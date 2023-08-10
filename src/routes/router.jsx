import { createBrowserRouter } from "react-router-dom";
import { BuyListComponent } from "../components/BuyListComponent";
import { LoginComponent } from "../components/LoginComponent";
import { SecondBuyListComponent } from "../components/SecondBuyListComponent";
export const router = createBrowserRouter([
    {
        path: '/buylist',
        // element: <BuyListComponent />
        element: <SecondBuyListComponent/>
    },
    {
        path: '/',
        element: <LoginComponent/>
    }
])