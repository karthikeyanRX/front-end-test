import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./feature/AboutPage";
import HomePage from "./feature/HomePage";
import ProductPage from "./feature/ProductPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/AboutPage" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
