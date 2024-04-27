import React from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";

import css from "./FormSearch.module.css";
import sprite from "../../utils/svg/sprite.svg";

const FormSearch = () => {
  return (
    <form>
      <div className={css.wrapper}>
        <div className={css.location}>
          <label for="locationId" className={css.labelLocation}>
            Location
          </label>

          <div className={css.inputBox}>
            <svg width="16" height="16" className={css.iconLocation}>
              <use xlinkHref={`${sprite}#map-pin`} />
            </svg>
            <input
              type="text"
              name="location"
              className={css.locationInput}
              placeholder="City"
              id="locationId"
              autocomplete="off"
            />
          </div>
        </div>

        <div className={css.filterWrapper}>
          <span className={css.filterSpan}>Filter</span>
          <span className={css.filterEquipment}>Vehicle equipment</span>
          <ul className={css.equipmentList}>
            <li className={`${css.equipmentItem} ${css.equipmentItem_ac}`}>
              <input
                className={css.checkbox}
                type="checkbox"
                name="ac"
                value="AC"
              />
              <svg width="32" height="32" className={css.iconEquipment}>
                <use xlinkHref={`${sprite}#ac`} />
              </svg>
              <span className={css.equipmentSpan}>AC</span>
            </li>

            <li
              className={`${css.equipmentItem} ${css.equipmentItem_automatic}`}
            >
              <input
                className={css.checkbox}
                type="checkbox"
                name="automatic"
                value="automatic"
              />
              <svg width="32" height="32" className={css.iconEquipment}>
                <use xlinkHref={`${sprite}#automatic`} />
              </svg>
              <span className={css.equipmentSpan}>Automatic</span>
            </li>

            <li className={`${css.equipmentItem} ${css.equipmentItem_kitchen}`}>
              <input
                className={css.checkbox}
                type="checkbox"
                name="kitchen"
                value="kitchen"
              />
              <svg width="32" height="32" className={css.iconEquipment}>
                <use xlinkHref={`${sprite}#kitchen`} />
              </svg>
              <span className={css.equipmentSpan}>Kitchen</span>
            </li>

            <li className={`${css.equipmentItem} ${css.equipmentItem_tv}`}>
              <input
                className={css.checkbox}
                type="checkbox"
                name="tv"
                value="tv"
              />
              <svg width="32" height="32" className={css.iconEquipment}>
                <use xlinkHref={`${sprite}#tv`} />
              </svg>
              <span className={css.equipmentSpan}>TV</span>
            </li>

            <li className={`${css.equipmentItem} ${css.equipmentItem_shower}`}>
              <input
                className={css.checkbox}
                type="checkbox"
                name="shower"
                value="shower"
              />
              <svg width="32" height="32" className={css.iconEquipment}>
                <use xlinkHref={`${sprite}#shower`} />
              </svg>
              <span className={css.equipmentSpan}>Shower/WC</span>
            </li>
          </ul>
        </div>

        <div className={css.filterWrapper}>
          <span className={css.filterEquipment}>Vehicle type</span>
          <ul className={css.equipmentList}>
            <li className={`${css.equipmentItem} ${css.equipmentItem_van}`}>
              <input
                className={css.checkbox}
                type="radio"
                name="VehicleType"
                value="van"
              />
              <svg width="40" height="28" className={css.iconEquipment}>
                <use xlinkHref={`${sprite}#camper_without_door`} />
              </svg>
              <span className={css.equipmentSpan}>Van</span>
            </li>

            <li className={`${css.equipmentItem} ${css.equipmentItem_fully}`}>
              <input
                className={css.checkbox}
                type="radio"
                name="VehicleType"
                value="fully"
              />
              <svg width="40" height="28" className={css.iconEquipment}>
                <use xlinkHref={`${sprite}#camper_without_window`} />
              </svg>
              <span className={css.equipmentSpan}>Fully Integrated</span>
            </li>

            <li className={`${css.equipmentItem} ${css.equipmentItem_alcove}`}>
              <input
                className={css.checkbox}
                type="radio"
                name="VehicleType"
                value="alcove"
              />
              <svg width="40" height="28" className={css.iconEquipment}>
                <use xlinkHref={`${sprite}#camper`} />
              </svg>
              <span className={css.equipmentSpan}>Alcove</span>
            </li>
          </ul>
        </div>
      </div>

      <ButtonSearch />
    </form>
  );
};

export default FormSearch;
