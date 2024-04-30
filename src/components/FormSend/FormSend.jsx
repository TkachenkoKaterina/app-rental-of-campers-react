import React, { useState } from "react";
import css from "./FormSend.module.css";

const FormSend = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({
      name: "",
      email: "",
      date: "",
      comment: "",
    });
  };

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperTitle}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.subTitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formWrapper}>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className={css.input}
            type="date"
            name="date"
            placeholder="Booking date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <textarea
            className={css.comment}
            name="comment"
            rows="5"
            cols="15"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        <div>
          <input className={css.button} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default FormSend;
