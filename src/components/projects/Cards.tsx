import Card from "./Card";
import { repos } from "./repos";
import css from "./index.module.css";

const Cards = () => {
  return (
    <article className={css.cards}>
      {repos.map((repo) => (
        <Card repo={repo} key={repo.title} />
      ))}
    </article>
  );
};

export default Cards;
