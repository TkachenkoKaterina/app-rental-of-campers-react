import React from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import FormSearch from "../../components/FormSearch/FormSearch";

import css from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className={css.wrapper}>
      <FormSearch />
      <div className={css.wrapperCatalog}>
        <CatalogList />
      </div>
    </div>
  );
};

export default Catalog;
