import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import MyCart from "../MyCart";
import NotFound from "../NotFound/notfound";
import Orders from "../Orders";
import SignIn from "../SignIn/signin";
import Navbar from "../../Components/navbar";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartProvider } from "../../Context";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furniture", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-cart", element: <MyCart /> },
    { path: "/*", element: <NotFound /> },
    { path: "/orders", element: <Orders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/product-detail", element: <ProductDetail /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <MyCart />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
