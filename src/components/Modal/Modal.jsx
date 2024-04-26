import React, { Suspense, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import {
  selectselectedCard,
  selectSelectedCatalogItemId,
} from "../../store/selectors";
import css from "./Modal.module.css";
import sprite from "../../utils/svg/sprite.svg";
import { fetchCatalogById } from "../../store/operations";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Modal = () => {
  const selectedItemId = useSelector(selectSelectedCatalogItemId);
  const selectedCardCatalog = useSelector(selectselectedCard);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal());
    navigate(`/catalog`);
  }, [dispatch, navigate]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleCloseModal]);

  useEffect(() => {
    dispatch(fetchCatalogById(selectedItemId));
  }, [dispatch, selectedItemId]);

  return (
    <div className={css.modalOverlay} onClick={handleCloseModal}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={css.modalContentInner}>
          <div className={css.modalHeader}>
            <h2 className={css.title}>{selectedCardCatalog?.name}</h2>
            <div className={css.closeButton} onClick={handleCloseModal}>
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#close`} />
              </svg>
            </div>
          </div>

          <div className={css.modalBody}>
            <div className={css.cardReviews}>
              <div className={css.review}>
                <div className={css.thumbnail}>
                  <svg width="16" height="16">
                    <use xlinkHref={`${sprite}#raiting`} />
                  </svg>
                </div>
                <p className={css.reviewRating}>
                  {selectedCardCatalog?.rating}(
                  {selectedCardCatalog?.reviews.length - 8} Reviews)
                </p>
              </div>

              <div className={css.review}>
                <div className={css.thumbnail}>
                  <svg width="16" height="16">
                    <use xlinkHref={`${sprite}#map-pin`} />
                  </svg>
                </div>
                <p>{selectedCardCatalog?.location}</p>
              </div>
            </div>

            <p className={css.title}>€{selectedCardCatalog?.price}</p>

            <div className={css.img}>
              <div className={css.cardImgBox}>
                <img
                  className={css.cardImg}
                  src={selectedCardCatalog?.gallery[0]}
                  alt="camper"
                />
              </div>
              <div className={css.cardImgBox}>
                <img
                  className={css.cardImg}
                  src={selectedCardCatalog?.gallery[1]}
                  alt="camper"
                />
              </div>
              <div className={css.cardImgBox}>
                <img
                  className={css.cardImg}
                  src={selectedCardCatalog?.gallery[2]}
                  alt="camper"
                />
              </div>
            </div>

            <p className={css.description}>
              {selectedCardCatalog?.description}
            </p>

            <div className={css.add}>
              <Link
                to={`/catalog/${selectedItemId}/features`}
                className={css.features}
              >
                Features
              </Link>
              <Link
                to={`/catalog/${selectedItemId}/reviews`}
                className={css.features}
              >
                Reviews
              </Link>
            </div>
            <div className={css.detailsLine}></div>
            <Suspense fallback={<div>Loading ...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
