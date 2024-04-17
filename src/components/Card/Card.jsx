import React from "react";
import Button from "../Button/Button";

import sprite from "../../utils/svg/sprite.svg";

import css from "./Card.module.css";

const Card = () => {
  return (
    <div className={css.cardWrapper}>
      <img src="" alt="" />
      <div className={css.cardInfo}>
        <div className={css.cardTitle}>
          <h2 className={css.title}>Mavericks</h2>
          <div className={css.cardPrice}>
            <p className={css.price}>€8000.00</p>
            <svg width="24" height="24">
              <use xlinkHref={`${sprite}#heart_default`} />
            </svg>
          </div>
        </div>

        <div className={css.cardReviews}>
          <div className={css.review}>
            <svg width="24" height="24">
              <use xlinkHref={`${sprite}#heart_pressed`} />
            </svg>
            <p>4.4(2 Reviews)</p>
          </div>

          <div className={css.location}>
            <svg>
              <use />
            </svg>
            <p>Kyiv, Ukraine</p>
          </div>
        </div>
        <p>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads.
        </p>
        <ul>
          <li className={css.item}>
            <svg>
              <use />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.item}>
            <svg>
              <use />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.item}>
            <svg>
              <use />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.item}>
            <svg>
              <use />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.item}>
            <svg>
              <use />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.item}>
            <svg>
              <use />
            </svg>
            <p>adults</p>
          </li>
        </ul>
        <Button />
      </div>
    </div>
  );
};

export default Card;
