import './App.css';
import Market from './pages/market/index'
import Profile from './pages/profile/Profile'
import Messages from "./pages/messages/Messages";
import  Rent  from './pages/rent-sell/Rent';
import Wishlist from './pages/cart/wishlist';

// import Login from './pages/login'; we will add this later when we figure out authentication

import {

  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//import the root layout of our page 
import Root from "./routes/Root";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { //setting the market page to be the landing page as of now,
        // we'll change this later to login when we get it figured out
        element: <Navigate to={"market"} replace />,
        index: true,
      },
      {
        path: "market",
        element: <Market/>,
      },
      {
        path: "sell",
        element: <Rent/>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

function App() { 
  return (
      <RouterProvider router={routes} />
  
  );
}

export default App;
