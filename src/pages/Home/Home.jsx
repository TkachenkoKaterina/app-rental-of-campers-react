import Button from "../../components/Button/Button";
import Heart from "../../components/Heart/Heart";
import FormSearch from "../../components/FormSearch/FormSearch";

import css from "./Home.module.css";

const Home = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Rental campervan</h1>
        <Button />
        <Heart />
        <FormSearch />
      </div>
    </section>
  );
};

export default Home;
