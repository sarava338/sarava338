import Card from "./Card";
import { Repo, repos } from "./repos";
import "./index.css";

const Cards = () => {
  return (
    <article className="cards">
      {repos.map((repo) => (
        <Card repo={repo} key={repo.title} />
      ))}
    </article>
  );
};

export default Cards;
