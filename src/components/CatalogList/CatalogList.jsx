import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./CatalogList.module.css";

import { fetchCatalogs } from "../../store/operations";
import {
  selectCatalogs,
  // selectFilter,
  selectFilteredCatalogs,
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
  // const filter = useSelector(selectFilter);

  const filteredCatalogs = useSelector(selectFilteredCatalogs);
  console.log(filteredCatalogs);

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
    <div>
      <ul className={css.catalogList}>
        {filteredCatalogs.map((catalog) => {
          return <CatalogItem key={catalog._id} catalog={catalog} />;
        })}
      </ul>
      {!isLoading && visibleCatalogs.length < catalogs.length && (
        <div className={css.loadMoreContainer}>
          <LoadMore onLoadMore={handleLoadMore} />
        </div>
      )}
    </div>
  );
};

export default CatalogList;
