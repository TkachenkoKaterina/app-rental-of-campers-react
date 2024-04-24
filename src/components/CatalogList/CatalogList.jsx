import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./CatalogList.module.css";

import { fetchCatalogs } from "../../store/operations";
import {
  selectCatalogs,
  selectIsLoading,
  selectPage,
} from "../../store/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import LoadMore from "../LoadMore/LoadMore";
import { incrementPage } from "../../store/catalogsSlice";

const CatalogList = () => {
  const dispatch = useDispatch();
  const catalogs = useSelector(selectCatalogs);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  console.log(catalogs);

  useEffect(() => {
    dispatch(fetchCatalogs(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCatalogs(page + 1));
  };

  // const startIndex = (page - 1) * limit;
  // const displayedCatalogs = catalogs.slice(startIndex, startIndex + limit);

  return (
    <>
      <ul className={css.catalogList}>
        {catalogs.map((catalog) => {
          return <CatalogItem key={catalog._id} catalog={catalog} />;
        })}
      </ul>
      {isLoading && <div>Loading...</div>}
      {!isLoading && catalogs.length > 0 && (
        <LoadMore onLoadMore={handleLoadMore} />
      )}
    </>
  );
};

export default CatalogList;
