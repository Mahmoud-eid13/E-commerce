import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.scss";
import { ThemeProvider } from "./Contexts/ThemeContext";

const Layout = () => {
  return (
    <div className="app">
      <ThemeProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
