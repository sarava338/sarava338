import Card from "./Card";
import { repos } from "./repos";

const Cards = () => {
  return (
    <>
      <h2>Projects</h2>
      <article className="cards">
        {repos?.map((i) => (
          <Card repo={i} key={i.title} />
        ))}
      </article>
    </>
  );
};

export default Cards;
