import React from "react";
import FormSend from "../FormSend/FormSend";

import css from "./Features.module.css";
import sprite from "../../utils/svg/sprite.svg";
import { selectselectedCard } from "../../store/selectors";
import { useSelector } from "react-redux";

const Features = () => {
  const selectedCardCatalog = useSelector(selectselectedCard);
  console.log(selectedCardCatalog);

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperLeft}>
        <div className={css.features}>
          <ul className={css.categoryList}>
            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#users`} />
              </svg>
              <p className={css.categoryItemsText}>
                {selectedCardCatalog?.adults} adults
              </p>
            </li>

            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#automatic`} />
              </svg>
              <p>{selectedCardCatalog?.transmission && "Automatic"}</p>
            </li>

            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#ac`} />
              </svg>
              <p>{selectedCardCatalog?.engine && "AC"}</p>
            </li>

            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#petrol`} />
              </svg>
              <p>{selectedCardCatalog?.engine}</p>
            </li>

            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#kitchen`} />
              </svg>
              <p>{selectedCardCatalog?.details.kitchen} Kitchen</p>
            </li>

            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#bed`} />
              </svg>
              <p>{selectedCardCatalog?.details.beds} beds</p>
            </li>

            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#air-conditioner`} />
              </svg>
              <p>
                {selectedCardCatalog?.details.airConditioner} air conditioner
              </p>
            </li>

            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#cd`} />
              </svg>
              <p className={css.categoryItemsText}>
                {selectedCardCatalog?.adults} CD
              </p>
            </li>

            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#radio`} />
              </svg>
              <p>{selectedCardCatalog?.details.radio} Radio</p>
            </li>

            <li className={css.categoryItems}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#hob`} />
              </svg>
              <p>{selectedCardCatalog?.details.radio} hob</p>
            </li>
          </ul>
        </div>
        <div className={css.details}>
          <h3 className={css.detailsTitle}>Vehicle details</h3>
          <div className={css.detailsLine}></div>
          <ul className={css.detailsInfo}>
            <li className={css.detailsForm}>
              <p className={css.detailsText}>Form</p>
              <p className={css.detailsValue}>{selectedCardCatalog?.form}</p>
            </li>
            <li className={css.detailsForm}>
              <p className={css.detailsText}>Length</p>
              <p className={css.detailsValue}>{selectedCardCatalog?.length}</p>
            </li>
            <li className={css.detailsForm}>
              <p className={css.detailsText}>Width</p>
              <p className={css.detailsValue}>{selectedCardCatalog?.width}</p>
            </li>
            <li className={css.detailsForm}>
              <p className={css.detailsText}>Height</p>
              <p className={css.detailsValue}>{selectedCardCatalog?.height}</p>
            </li>
            <li className={css.detailsForm}>
              <p className={css.detailsText}>Tank</p>
              <p className={css.detailsValue}>{selectedCardCatalog?.tank}</p>
            </li>
            <li className={css.detailsForm}>
              <p className={css.detailsText}>Consumption</p>
              <p className={css.detailsValue}>
                {selectedCardCatalog?.consumption}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <FormSend />
    </div>
  );
};

export default Features;
