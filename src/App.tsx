import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import Login from "./components/Login";
import About from "./pages/About";
import FlashSales from "./pages/FlashSales";
import Company from "./pages/Company";
import Cart from "./pages/Cart";
import Vendor2 from "./components/Vendors/Vendor2";
import Vendor3 from "./components/Vendors/Vendor3";
import Vendor4 from "./components/Vendors/Vendor4";
import Vendor5 from "./components/Vendors/Vendor5";
import Checkout from "./components/Cart/Checkout";
import { useState } from "react";


function App() {
    const [login, setLogin] = useState(false);  // <-- add this line

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/vendor1" element={<About />} />
        <Route path="/vendor2" element={<Vendor2 />} />
        <Route path="/vendor3" element={<Vendor3 />} />
        <Route path="/vendor4" element={<Vendor4 />} />
        <Route path="/vendor5" element={<Vendor5 />} />
        <Route path="/flash-sales" element={<FlashSales />} />
        <Route path="/about-us" element={<Company />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
