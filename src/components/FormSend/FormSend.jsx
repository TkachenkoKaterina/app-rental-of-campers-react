import React from "react";
import css from "./FormSend.module.css";

const FormSend = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperTitle}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.subTitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={css.form}>
        <div className={css.formWrapper}>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className={css.input}
            type="date"
            name="date"
            placeholder="Booking date"
          />
          <textarea
            className={css.comment}
            name="comment"
            rows="5"
            cols="15"
            placeholder="Comment"
          />
        </div>
        <div>
          <input className={css.button} type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default FormSend;
