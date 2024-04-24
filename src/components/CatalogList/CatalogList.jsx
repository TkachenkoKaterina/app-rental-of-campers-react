import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./CatalogList.module.css";

import { fetchCatalogs } from "../../store/operations";
import { selectCatalogs } from "../../store/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = () => {
  const dispatch = useDispatch();
  const catalogs = useSelector(selectCatalogs);
  console.log(catalogs);

  useEffect(() => {
    dispatch(fetchCatalogs());
  }, [dispatch]);

  return (
    <ul className={css.catalogList}>
      {catalogs.map((catalog) => {
        return <CatalogItem key={catalog._id} catalog={catalog} />;
      })}
    </ul>
  );
};

export default CatalogList;
