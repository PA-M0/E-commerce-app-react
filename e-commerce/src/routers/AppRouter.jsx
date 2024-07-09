import react from "react";
import Footer from "../components/common/footer/Footer.jsx";
import Header from "../components/common/header/Header.jsx";

// import * as ROUTES from '@/constants/routes';
// import { createBrowserHistory } from 'history';
import { Route, Routes } from "react-router-dom";
// import * as view from '@/views';
import Home from "../view/Home";
import Shop from "../view/Shop";
import About from "../view/About";
import Product from "../view/Product.tsx";
import useContext from 'react'
import ProductManager from "../components/common/productManage/ProductManager.tsx";
const AppRouter = () => (
  // const ProductsContext = createContext()
  // const [products, setProducts] = useState<ProductType[]>([]);

  <>
  {/* <ProductsContext.Provider value="products"> */}
    <Header />
    <Routes>
      {/* <Navigation /> */}

      {/* <Switch>
        <Route
          component={view.Search}
          exact
          path={ROUTES.SEARCH}
        />
        <Route
          component={view.Home}
          exact
          path={ROUTES.HOME}
        />
        <Route
          component={view.Shop}
          exact
          path={ROUTES.SHOP}
        />
        <Route
          component={view.FeaturedProducts}
          exact
          path={ROUTES.FEATURED_PRODUCTS}
        />
        <Route
          component={view.RecommendedProducts}
          exact
          path={ROUTES.RECOMMENDED_PRODUCTS}
        />
       
        <PublicRoute component={view.PageNotFound} />
      </Switch> */}

      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/manage" element={<ProductManager />} />

    </Routes>
    <Footer />
    {/* </ProductsContext.Provider> */}
  </>
);

export default AppRouter;
