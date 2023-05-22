import PropTypes from "prop-types"
const Card = ({repo}) => {

  const {title, code_url, deploy_url} = repo;

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

Card.propTypes = {
  repo: PropTypes.object,
  title : PropTypes.string,
  deploy_url: PropTypes.string,
  code_url: PropTypes.string,
}

export default Card;
