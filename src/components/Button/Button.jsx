import React from "react";

import css from "./Button.module.css";

const Button = () => {
  return (
    <button className={css.button} type="button">
      Show more
    </button>
  );
};

export default Button;
