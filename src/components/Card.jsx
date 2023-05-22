const Card = ({repo}) => {

  const {title, code_url, deploy_url} = repo

  return (
    <section className="card">
      <h3>{title}</h3>
      <div>
        <a
          href={code_url}
          target="_blank"
          rel="noreferrer"
        >
          code
        </a>
        <a
          href={deploy_url}
          target="_blank"
          rel="noreferrer"
        >
          view
        </a>
      </div>
    </section>
  );
};

export default Card;
