import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "../SharedLayout/SharedLayout";

import css from "./App.module.css";
import { useSelector } from "react-redux";
import { selectSelectedCatalogItemId } from "../../store/selectors";
import CatalogDetails from "../../pages/CatalogDetails/CatalogDetails";
import Modal from "../Modal/Modal";

const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
// const CatalogDetails = lazy(() =>
//   import("../../pages/CatalogDetails/CatalogDetails")
// );
// const Features = lazy(() => import("../Features/Features"));
// const Reviews = lazy(() => import("../Reviews/Reviews"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));
const Page404 = lazy(() => import("../../pages/Page404/Page404"));

const App = () => {
  const selectedCatalogItemId = useSelector(selectSelectedCatalogItemId);
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          {/* <Route path="catalog/:catalogId" element={<CatalogDetails />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          {selectedCatalogItemId && (
            <Route
              path={`/catalog/${selectedCatalogItemId}`}
              element={
                <Modal onClose={() => navigate(-1)}>
                  <CatalogDetails />
                </Modal>
              }
            />
          )}
          <Route path="favorites" element={<Favorites />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
