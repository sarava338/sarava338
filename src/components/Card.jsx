const Card = ({repo}) => {

  var {language, name, full_name, html_url} = repo

  language = language==='JavaScript' ? 'js' : language

  return (
    <section className="card">
      <h3>{name}</h3>
      <p>Mostly used lang : {language}</p>
      <div>
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
        >
          code
        </a>
        <a
          href={`https://${full_name.replace("/", "-")}.netlify.app`}
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
