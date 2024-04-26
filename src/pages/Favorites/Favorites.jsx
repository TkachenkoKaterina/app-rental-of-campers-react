import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../store/selectors";
import css from "./Favorites.module.css";
import sprite from "../../utils/svg/sprite.svg";
import { removeFromFavorites } from "../../store/favoritesSlice";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className={css.favorites}>
      {favorites.length === 0 && (
        <p className={css.noFavorites}>No favorites added yet</p>
      )}

      {favorites.map((favorite) => (
        <li key={favorite._id} className={css.cardWrapper}>
          <div className={css.cardImgBox}>
            <img
              className={css.cardImg}
              src={favorite.gallery[0]}
              alt="camper"
            />
          </div>
          <div className={css.cardInfo}>
            <div className={css.cardInfoReview}>
              <div className={css.cardTitle}>
                <h2 className={css.title}>{favorite.name}</h2>
                <div className={css.cardPrice}>
                  <p className={css.title}>€{favorite.price}.00</p>
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
                    {favorite.rating}({favorite.reviews.length - 8} Reviews)
                  </p>
                </div>

                <div className={css.review}>
                  <div className={css.thumbnail}>
                    <svg width="16" height="16">
                      <use xlinkHref={`${sprite}#map-pin`} />
                    </svg>
                  </div>

                  <p>{favorite.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className={css.button}
              onClick={() => handleRemoveFromFavorites(favorite._id)}
            >
              Delete from favorites
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Favorites;
