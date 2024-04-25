import React from "react";
import css from "./CatalogItem.module.css";
// import IMG from "../../utils/img/switch.jpg";
import sprite from "../../utils/svg/sprite.svg";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/catalogsSlice";
// import { selectCatalogItem } from "../../store/catalogsSlice";

const CatalogItem = ({ catalog }) => {
  const {
    // _id,
    name,
    price,
    rating,
    location,
    adults,
    // children,
    engine,
    transmission,
    // form,
    // length,
    // width,
    // height,
    // tank,
    // consumption,
    description,
    details,
    gallery,
    reviews,
  } = catalog;

  const dispatch = useDispatch();

  const handleCatalogItemClick = () => {
    dispatch(openModal(catalog._id));
  };

  return (
    <li onClick={handleCatalogItemClick} className={css.cardWrapper}>
      <div className={css.cardImgBox}>
        <img className={css.cardImg} src={gallery[0]} alt="camper" />
      </div>
      <div className={css.cardInfo}>
        <div className={css.cardInfoReview}>
          <div className={css.cardTitle}>
            <h2 className={css.title}>{name}</h2>
            <div className={css.cardPrice}>
              <p className={css.title}>€{price}.00</p>
              <svg className={css.heart} width="24" height="24">
                <use xlinkHref={`${sprite}#heart`} />
              </svg>
            </div>
          </div>

          <div className={css.cardReviews}>
            <div className={css.review}>
              <div className={css.thumbnail}>
                <svg width="16" height="16">
                  <use xlinkHref={`${sprite}#raiting`} />
                </svg>
              </div>

              <p className={css.reviewRating}>
                {rating}({reviews.length - 8} Reviews)
              </p>
            </div>

            <div className={css.review}>
              <div className={css.thumbnail}>
                <svg width="16" height="16">
                  <use xlinkHref={`${sprite}#map-pin`} />
                </svg>
              </div>

              <p>{location}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.categoryList}>
          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p className={css.categoryItemsText}>{adults} adults</p>
          </li>

          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>{transmission}</p>
          </li>

          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>{engine}</p>
          </li>

          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>{details.kitchen && "Kitchen"}</p>
          </li>

          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>{details.beds} beds</p>
          </li>

          <li className={css.categoryItems}>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#users`} />
            </svg>
            <p>{details.airConditioner && "AC"}</p>
          </li>
        </ul>
        <div>
          <Button />
        </div>
      </div>
    </li>
  );
};

export default CatalogItem;
