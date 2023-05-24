import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Main from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App" onSelectStart="return false;">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<Main />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/app" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
