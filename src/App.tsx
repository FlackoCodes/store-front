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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<About />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
