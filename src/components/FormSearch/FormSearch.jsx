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
                <input type="checkbox" name="equipment" value="AC" hidden />
                <span className={css.equipmentSpan}>AC</span>
              </label>
              <label className={css.label}>
                <input type="checkbox" name="equipment" value="AC" hidden />
                <span className={css.equipmentSpan}>AC</span>
              </label>
              <label className={css.label}>
                <input type="checkbox" name="equipment" value="AC" hidden />
                <span className={css.equipmentSpan}>AC</span>
              </label>
              <label className={css.label}>
                <input type="checkbox" name="equipment" value="AC" hidden />
                <span className={css.equipmentSpan}>AC</span>
              </label>
              <label className={css.label}>
                <input type="checkbox" name="equipment" value="AC" hidden />
                <span className={css.equipmentSpan}>AC</span>
              </label>
            </li>
          </ul>
        </div>

        <div className={css.filterWrapper}>
          <span className={css.filterEquipment}>Vehicle type</span>
          <ul className={css.equipmentList}>
            <li className={css.equipmentItem}>
              <label className={css.label}>
                <input type="checkbox" name="equipment" value="AC" hidden />
                <span className={css.equipmentSpan}>AC</span>
              </label>
              <label className={css.label}>
                <input type="checkbox" name="equipment" value="AC" hidden />
                <span className={css.equipmentSpan}>AC</span>
              </label>
              <label className={css.label}>
                <input type="checkbox" name="equipment" value="AC" hidden />
                <span className={css.equipmentSpan}>AC</span>
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
