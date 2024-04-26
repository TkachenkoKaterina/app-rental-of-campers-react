import React from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";

import css from "./FormSearch.module.css";

const FormSearch = () => {
  return (
    <form>
      <div className={css.wrapper}>
        <label className={css.location}>
          Location
          <input
            className={css.locationInput}
            type="text"
            name="location"
            placeholder="City"
          />
        </label>

        <div className={css.filterWrapper}>
          <span className={css.filterSpan}>Filter</span>
          <span className={css.filterEquipment}>Vehicle equipment</span>
          <ul className={css.equipmentList}>
            <li className={css.equipmentItem}>
              <label className={css.label}>
                <input type="checkbox" name="AC" value="AC" hidden />
                <span className={css.equipmentSpan}>AC</span>
              </label>
              <label className={css.label}>
                <input
                  type="checkbox"
                  name="automatic"
                  value="Automatic"
                  hidden
                />
                <span className={css.equipmentSpan}>Automatic</span>
              </label>
              <label className={css.label}>
                <input type="checkbox" name="kitchen" value="Kitchen" hidden />
                <span className={css.equipmentSpan}>Kitchen</span>
              </label>
              <label className={css.label}>
                <input type="checkbox" name="tv" value="TV" hidden />
                <span className={css.equipmentSpan}>TV</span>
              </label>
              <label className={css.label}>
                <input type="checkbox" name="shower" value="Shower/WC" hidden />
                <span className={css.equipmentSpan}>Shower/WC</span>
              </label>
            </li>
          </ul>
        </div>

        <div className={css.filterWrapper}>
          <span className={css.filterEquipment}>Vehicle type</span>
          <ul className={css.equipmentList}>
            <li className={css.equipmentItem}>
              <label className={css.label}>
                <input type="radio" name="VehicleType" hidden />
                <span className={css.equipmentSpan}>AC</span>
              </label>
              <label className={css.label}>
                <input type="radio" name="VehicleType" hidden />
                <span className={css.equipmentSpan}>Fully Integrated</span>
              </label>
              <label className={css.label}>
                <input type="radio" name="VehicleType" hidden />
                <span className={css.equipmentSpan}>Alcove</span>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <ButtonSearch />
    </form>
  );
};

export default FormSearch;
