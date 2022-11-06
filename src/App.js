import "./App.css";
import WooLayout from "./components/Layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import menu_list from "./Routes";

function App() {
  return (
    <Router>
      <WooLayout>
        <Routes>
          {menu_list.map((nav, index) => {
            return <Route path={nav.value} element={<div>page {index}</div>} />;
          })}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </WooLayout>
    </Router>
  );
}

export default App;
