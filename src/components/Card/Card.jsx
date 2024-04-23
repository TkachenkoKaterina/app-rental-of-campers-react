import React from "react";
import Button from "../Button/Button";

import sprite from "../../utils/svg/sprite.svg";

import css from "./Card.module.css";
import IMG from "../../utils/img/switch.jpg";

const Card = () => {
  return (
    <div className={css.cardWrapper}>
      <div>
        <img src={IMG} alt="camper" width="290" height="310" />
      </div>
      <div className={css.cardInfo}>
        <div className={css.cardInfoReview}>
          <div className={css.cardTitle}>
            <h2 className={css.title}>Mavericks</h2>
            <div className={css.cardPrice}>
              <p className={css.title}>€8000.00</p>
              <svg className={css.heart} width="24" height="24">
                <use xlinkHref={`${sprite}#heart`} />
              </svg>
            </div>
          </div>

          <div className={css.cardReviews}>
            <div className={css.review}>
              <svg width="16" height="16">
                <use xlinkHref={`${sprite}#raiting`} />
              </svg>
              <p className={css.reviewRating}>4.4(2 Reviews)</p>
            </div>

            <div className={css.review}>
              <svg width="16" height="16">
                <use xlinkHref={`${sprite}#map-pin`} />
              </svg>
              <p>Kyiv, Ukraine</p>
            </div>
          </div>
        </div>
        <p className={css.reviewText}>
          Embrace simplicity and freedom with the Mavericks panel truck, an...
        </p>
        <ul className={css.categoryList}>
          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p className={css.categoryItemsText}>adults</p>
          </li>
          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>adults</p>
          </li>
          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>adults</p>
          </li>
        </ul>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Card;
