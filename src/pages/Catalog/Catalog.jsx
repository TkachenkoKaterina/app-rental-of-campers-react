import React from "react";
import Card from "../../components/Card/Card";
import FormSearch from "../../components/FormSearch/FormSearch";

import css from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className={css.wrapper}>
      <FormSearch />
      <Card />
    </div>
  );
};

export default Catalog;
