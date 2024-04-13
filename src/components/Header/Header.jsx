import React from "react";

const Header = () => {
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/movies" className={css.link}>
        Movies
      </Link>
    </nav>
  );
};

export default Header;
