import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "../SharedLayout/SharedLayout";
import Spinner from "../Spinner/Spinner";

import css from "./App.module.css";
import { selectIsLoading } from "../../store/selectors";
import { useSelector } from "react-redux";

const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const Modal = lazy(() => import("../Modal/Modal"));
const Features = lazy(() => import("../Features/Features"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));
const Page404 = lazy(() => import("../../pages/Page404/Page404"));

const App = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.container}>
      {isLoading && <Spinner />}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:catalogId" element={<Modal />}>
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
