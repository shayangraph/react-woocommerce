import "./App.css";
import WooLayout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import menu_list from "./Routes";

function App() {
  return (
    <WooLayout>
      <Routes>
        {menu_list.map((nav, index) => {
          return <Route key={index} path={nav.value} element={nav.component} />;
        })}
        <Route key={"home"} path="/" element={<Navigate to="/home" />} />
        <Route
          key={"products"}
          path={"/products/:id"}
          element={<div>products</div>}
        />
        <Route key={"return"} path="*" element={<Navigate to="/home" />} />
      </Routes>
    </WooLayout>
  );
}

export default App;
