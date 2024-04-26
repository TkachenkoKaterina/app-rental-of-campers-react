import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "../SharedLayout/SharedLayout";

import css from "./App.module.css";
import { useSelector } from "react-redux";
// import CatalogDetails from "../../pages/CatalogDetails/CatalogDetails";
import Modal from "../Modal/Modal";
import { selectIsOpen } from "../../store/selectors";

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
  const isOpen = useSelector(selectIsOpen);

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>

      {isOpen && <Modal />}
    </div>
  );
};

export default App;
