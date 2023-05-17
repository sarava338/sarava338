import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <p className="logo">sarava338</p>
        <ul>
          <li>
            <Link className="a" to="/">Home</Link>
          </li>
          <li>
            <Link className="a" to="project">Project</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
