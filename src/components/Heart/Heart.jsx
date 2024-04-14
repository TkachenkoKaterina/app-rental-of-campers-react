import React from "react";

// import HEART from "../../utils/svg/heart.svg";
import HEART from "./heart.svg";

import css from "./Heart.module.css";

const Heart = () => {
  // return (
  //   <svg className={css.icon}>
  //     <use xlinkHref={HEART} />
  //   </svg>
  // );
  return <img className={css.heart} src={HEART} alt="favorite icon" />;
};

export default Heart;
