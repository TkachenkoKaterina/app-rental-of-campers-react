import React from "react";

import css from "./ButtonSearch.module.css";

const ButtonSearch = ({ handleFormSubmit }) => {
  return (
    <button onClick={handleFormSubmit} className={css.button} type="submit">
      Search
    </button>
  );
};

export default ButtonSearch;
