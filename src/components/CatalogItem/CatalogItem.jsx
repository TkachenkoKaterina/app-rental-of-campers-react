import React, { useEffect, useState } from "react";
import css from "./CatalogItem.module.css";
import sprite from "../../utils/svg/sprite.svg";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modalSlice";
import { Link } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favoritesSlice";
import { selectFavorites } from "../../store/selectors";

const CatalogItem = ({ catalog }) => {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
  } = catalog;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some((favorite) => favorite._id === _id));
  }, [favorites, _id]);

  const handleItemClick = () => {
    dispatch(openModal(_id));
  };

  const handleAddToFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(_id));
    } else {
      dispatch(addToFavorites(catalog));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <li className={css.cardWrapper}>
      <div className={css.cardImgBox}>
        <img className={css.cardImg} src={gallery[0]} alt="camper" />
      </div>
      <div className={css.cardInfo}>
        <div className={css.cardInfoReview}>
          <div className={css.cardTitle}>
            <h2 className={css.title}>{name}</h2>
            <div className={css.cardPrice}>
              <p className={css.title}>€{price}.00</p>
              <svg
                className={css.heart}
                width="24"
                height="24"
                onClick={handleAddToFavorites}
              >
                <use
                  xlinkHref={`${sprite}#${
                    isFavorite ? "heart-pressed" : "heart"
                  }`}
                />
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
          <Link to={`/catalog/${_id}`}>
            <Button handleItemClick={handleItemClick} />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CatalogItem;
