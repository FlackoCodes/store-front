import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import Login from "./components/Login";
import About from "./pages/VendorPage";
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
  const [, setLogin] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login setLogin={setLogin} />} />

        {/* ONE dynamic vendor route */}
        <Route path="vendor/:vendorId" element={<About />} />

        <Route path="flash-sales" element={<FlashSales />} />
        <Route path="about-us" element={<Company />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />

        <Route path="*" element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
