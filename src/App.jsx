import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import men_banner from "/banner_mens.png";
import women_banner from "/banner_women.png";
import kids_banner from "/banner_kids.png";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route
            exact
            path="/Men"
            element={<ShopCategory category="men" banner={men_banner} />}
          />
          <Route
            exact
            path="/Women"
            element={<ShopCategory category="women" banner={women_banner} />}
          />
          <Route
            exact
            path="/Kids"
            element={<ShopCategory category="kid" banner={kids_banner} />}
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
