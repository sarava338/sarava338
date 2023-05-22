import Card from "../components/Card";
import { repos } from "../helper/repos";

const Project = () => {

  return (
    <article className="project">
      <h2>Projects</h2>
      <article className="cards">
        {repos?.map((i) => (
          <Card repo={i} key={i.title} />
        ))}
      </article>
    </article>
  );
};

export default Project;
