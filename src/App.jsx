import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:category" element={<CategoriesPage />} />
        <Route
          path="/categories/:category/:slug"
          element={<ProductDetailsPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
