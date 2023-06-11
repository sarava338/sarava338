import { Repo } from "./repos";

const Card = (props: { repo: Repo }) => {
  const { title, code_url, deploy_url } = props.repo;

  return (
    <section className="card">
      <h3>{title}</h3>
      <div>
        <a href={code_url} target="_blank" rel="noreferrer">
          code
        </a>
        <a href={deploy_url} target="_blank" rel="noreferrer">
          view
        </a>
      </div>
    </section>
  );
};

export default Card;
