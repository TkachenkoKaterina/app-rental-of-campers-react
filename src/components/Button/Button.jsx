import React from "react";

import css from "./Button.module.css";

const Button = ({ handleItemClick }) => {
  return (
    <button onClick={handleItemClick} className={css.button} type="button">
      Show more
    </button>
  );
};

export default Button;
