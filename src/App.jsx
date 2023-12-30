import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route exact path="/Men" element={<ShopCategory category="Men" />} />
          <Route
            exact
            path="/Women"
            element={<ShopCategory category="Women" />}
          />
          <Route
            exact
            path="/Kids"
            element={<ShopCategory category="Kids" />}
          />
          <Route exact path="/Product" element={<Product />}>
            <Route exact path=":productId" element={<Product />} />
          </Route>
          <Route exact path="/LoginSignup" element={<LoginSignup />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
