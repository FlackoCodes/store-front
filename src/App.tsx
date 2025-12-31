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
import Checkout from "./components/Cart/Checkout";
import { useState } from "react";

function App() {
  const [, setLogin] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login setLogin={setLogin} />} />
          <Route path="vendor/:vendorId" element={<About />} />
          <Route path="flash-sales" element={<FlashSales />} />
          <Route path="about-us" element={<Company />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Home />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
