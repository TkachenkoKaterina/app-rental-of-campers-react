import React from "react";

import css from "./LoadMore.module.css";

const LoadMore = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={css.loadMore} type="button">
      Load more
    </button>
  );
};

export default LoadMore;
