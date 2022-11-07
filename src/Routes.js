import AuthPage from "./components/Auth/Auth";

const menu_list = [
  { title: "صفحه اصلی", value: "home", component: <AuthPage /> },
  { title: "لیست خرید", value: "cart", component: <AuthPage /> },
  { title: "پروفایل", value: "profile", component: <AuthPage /> },
  { title: "صفحه ورود", value: "auth", component: <AuthPage /> },
];
export default menu_list;
