import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <div className={css.container}>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default SharedLayout;
