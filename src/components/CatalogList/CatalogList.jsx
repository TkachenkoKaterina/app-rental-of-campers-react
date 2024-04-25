import React, { useCallback, useEffect } from "react";
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
  // console.log(catalogs);

  useEffect(() => {
    dispatch(fetchCatalogs());
  }, [dispatch]);

  const handleLoadMore = useCallback(() => {
    dispatch(incrementPage());
    dispatch(fetchCatalogs());
  }, [dispatch]);

  const startIndex = (page - 1) * 4;
  const endIndex = startIndex + 4;
  const visibleCatalogs = catalogs.slice(0, endIndex);

  return (
    <>
      <ul className={css.catalogList}>
        {visibleCatalogs.map((catalog) => {
          return <CatalogItem key={catalog._id} catalog={catalog} />;
        })}
      </ul>
      {isLoading && <div>Loading...</div>}
      {!isLoading && visibleCatalogs.length < catalogs.length && (
        <div className={css.loadMoreContainer}>
          <LoadMore onLoadMore={handleLoadMore} />
        </div>
      )}
    </>
  );
};

export default CatalogList;
