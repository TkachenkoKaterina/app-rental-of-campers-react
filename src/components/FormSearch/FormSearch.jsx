import React from "react";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";

import css from "./FormSearch.module.css";

const FormSearch = () => {
  return (
    <form>
      <label className={css.label}>
        Location
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="City"
        />
      </label>

      <label className={css.filter_label}>
        Filter
        <input
          className={css.filter_input}
          type="text"
          name="name"
          placeholder="Vehicle equipment"
        />
      </label>
      <VehicleEquipment />

      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormSearch;
