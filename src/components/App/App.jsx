import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "../SharedLayout/SharedLayout";

import css from "./App.module.css";

const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const CatalogDetails = lazy(() =>
  import("../../pages/CatalogDetails/CatalogDetails")
);
const Features = lazy(() => import("../Features/Features"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));
const Page404 = lazy(() => import("../../pages/Page404/Page404"));

const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:catalogId" element={<CatalogDetails />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="favorites" element={<Favorites />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
