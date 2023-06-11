import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <p>sarava338</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="project">Project</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
