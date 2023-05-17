const Card = ({repo}) => {

  repo.language = repo.language==='JavaScript' ? 'js' : repo.language;

  return (
    <section className="card">
      <h3>{repo.name}</h3>
      <p>Mostly used lang : {repo.language}</p>
      <div className="card-links">
        <a
          className="a card-a"
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          code
        </a>
        <a
          className="a card-a"
          href={`https://${repo.full_name.replace("/", "-")}.netlify.app`}
          target="_blank"
          rel="noreferrer"
        >
          view
        </a>{" "}
      </div>
    </section>
  );
};

export default Card;
