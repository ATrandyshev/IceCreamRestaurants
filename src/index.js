import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/MainPage";
import "./index.css";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { NotFoundPage } from "./pages/NotFounPage/NotFoundPage";
import RestaurantContainer from "./containers/Restaurant/Restaurant";
import { ProductsPage } from "./pages/ProoductsPage/ProductsPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage/ProductDetailsPage";
import { MenuContainer } from "./containers/Menu/Menu";
import { ReviewsContainer } from "./containers/Reviews/Reviews";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />}>
          <Route
            index
            element={<h3 style={{ textAlign: "center" }}>Select restaurant</h3>}
          />
          <Route path=":id" element={<RestaurantContainer />}>
            <Route index element={<MenuContainer />} />
            <Route path="reviews" element={<ReviewsContainer />} />
          </Route>
        </Route>
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
