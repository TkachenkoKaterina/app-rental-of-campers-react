import Button from "../../components/Button/Button";

import css from "./Home.module.css";

const Home = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Rental campervan</h1>
        <Button />
      </div>
    </section>
  );
};

export default Home;
