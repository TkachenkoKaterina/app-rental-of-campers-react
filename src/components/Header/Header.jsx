import React from "react";
import { Link } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/catalog" className={css.link}>
        Catalog
      </Link>
      <Link to="/favorites" className={css.link}>
        Favorites
      </Link>
    </nav>
  );
};

export default Header;
