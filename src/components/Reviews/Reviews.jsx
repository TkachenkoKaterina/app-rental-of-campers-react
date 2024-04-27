import React from "react";

import css from "./Reviews.module.css";
import sprite from "../../utils/svg/sprite.svg";
import FormSend from "../FormSend/FormSend";
import { selectselectedCard } from "../../store/selectors";
import { useSelector } from "react-redux";

const Reviews = () => {
  const selectedCardCatalog = useSelector(selectselectedCard);
  console.log(selectedCardCatalog);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <li key={i} className={css.ratingItem}>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#star-active`} />
            </svg>
          </li>
        );
      } else {
        stars.push(
          <li key={i} className={css.ratingItem}>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#star`} />
            </svg>
          </li>
        );
      }
    }
    return stars;
  };

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperLeft}>
        <ul className={css.reviewList}>
          {selectedCardCatalog?.reviews.slice(0, 2).map((review, index) => (
            <li key={index} className={css.reviewItem}>
              <div className={css.reviewUserInfo}>
                <div className={css.avatar}>
                  <p className={css.capitalize}>
                    {String.fromCharCode(65 + index)}
                  </p>
                </div>
                <div className={css.userInfo}>
                  <p className={css.user}>{review.reviewer_name}</p>
                  <ul className={css.rating}>
                    {renderStars(review.reviewer_rating)}
                  </ul>
                </div>
              </div>
              <p className={css.description}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <FormSend />
    </div>
  );
};

export default Reviews;
