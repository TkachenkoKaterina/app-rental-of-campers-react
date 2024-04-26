import React from "react";

import css from "./Reviews.module.css";
import sprite from "../../utils/svg/sprite.svg";
import FormSend from "../FormSend/FormSend";
import { selectselectedCard } from "../../store/selectors";
import { useSelector } from "react-redux";

const Reviews = () => {
  const selectedCardCatalog = useSelector(selectselectedCard);
  console.log(selectedCardCatalog);

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperLeft}>
        <ul className={css.reviewList}>
          <li className={css.reviewItem}>
            <div className={css.reviewUserInfo}>
              <div className={css.avatar}>
                <p className={css.capitalize}>A</p>
              </div>
              <div className={css.userInfo}>
                <p className={css.user}>
                  {selectedCardCatalog?.reviews[0].reviewer_name}
                </p>
                <div className={css.rating}>
                  <ul className={css.ratingList}>
                    <li className={css.ratingItem}>
                      <svg width="16" height="16" className={css.starActive}>
                        <use xlinkHref={`${sprite}#star`} />
                      </svg>
                    </li>
                    <li className={css.ratingItem}>
                      <svg width="16" height="16">
                        <use xlinkHref={`${sprite}#star`} />
                      </svg>
                    </li>
                    <li className={css.ratingItem}>
                      <svg width="16" height="16">
                        <use xlinkHref={`${sprite}#star`} />
                      </svg>
                    </li>
                    <li className={css.ratingItem}>
                      <svg width="16" height="16">
                        <use xlinkHref={`${sprite}#star`} />
                      </svg>
                    </li>
                    <li className={css.ratingItem}>
                      <svg width="16" height="16">
                        <use xlinkHref={`${sprite}#star`} />
                      </svg>
                    </li>
                  </ul>
                  {selectedCardCatalog?.reviews[0].reviewer_rating}
                </div>
              </div>
            </div>
            <p className={css.description}>
              {selectedCardCatalog?.reviews[0].comment}
            </p>
          </li>

          <li className={css.reviewItem}>
            <div className={css.reviewUserInfo}>
              <div className={css.avatar}>
                <p className={css.capitalize}>B</p>
              </div>
              <div className={css.userInfo}>
                <p className={css.user}>
                  {selectedCardCatalog?.reviews[1].reviewer_name}
                </p>
                <div className={css.rating}>
                  {selectedCardCatalog?.reviews[1].reviewer_rating}
                </div>
              </div>
            </div>

            <p className={css.description}>
              {selectedCardCatalog?.reviews[1].comment}
            </p>
          </li>
        </ul>
      </div>
      <FormSend />
    </div>
  );
};

export default Reviews;
