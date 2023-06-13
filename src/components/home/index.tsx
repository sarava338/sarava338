import Cube from "../3dmodels/Cube";
import Skills from "../3dmodels/Skills";
import styles from "./index.module.css";

const Home = () => {
  return (
    <>
      <article>
        <h1>
          <small>Hi, I am</small>
          <br />
          Saravanan Lakshmanan
        </h1>
      </article>
      <Cube />
    </>
  );
};

export default Home;
