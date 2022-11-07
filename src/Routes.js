import AuthPage from "./components/Auth/Auth";
import CartPage from "./components/Cart/Cart";
import HomePage from "./components/Home/Home";
import ProfilePage from "./components/Profile/Profile";

const menu_list = [
  { title: "صفحه اصلی", value: "home", component: <HomePage /> },
  { title: "لیست خرید", value: "cart", component: <CartPage /> },
  { title: "پروفایل", value: "profile", component: <ProfilePage /> },
  { title: "صفحه ورود", value: "auth", component: <AuthPage /> },
];
export default menu_list;
