import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { get_category } from "./store/reducers/homeReducer";
import CategoryShop from "./pages/CategoryShop";
import SearchProducts from "./pages/SearchProducts";
import Payment from "./pages/Payment";
import ProtectUser from "./utils/ProtectUser";
import Dashboard from "./pages/Dashboard";
import Index from "./components/dashboard/Index";
import Orders from "./components/dashboard/Orders";
import ChangePassword from "./components/dashboard/ChangePassword";
import Wishlist from "./components/dashboard/Wishlist";
import OrderDetails from "./components/dashboard/OrderDetails";

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_category())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/products?" element={<CategoryShop />} />
        <Route path="/products/search?" element={<SearchProducts />} />
        <Route path="/product/details/:slug" element={<Details />} />
        <Route path="/dashboard" element={<ProtectUser />}>
          <Route path="" element={<Dashboard />}>
          <Route path="" element={<Index />} />
          <Route path="/dashboard/my-orders" element={<Orders />} />
          <Route path="/dashboard/change-password" element={<ChangePassword />} />
          <Route path="/dashboard/my-wishlist" element={<Wishlist />} />
          <Route path="/dashboard/order/details/:orderId" element={<OrderDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
