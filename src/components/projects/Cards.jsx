import Card from "./Card";
import { repos } from "./repos";
import "./index.css";

const Cards = () => {
  return (
    <article className="cards">
      {repos?.map((i) => (
        <Card repo={i} key={i.title} />
      ))}
    </article>
  );
};

export default Cards;
