import CubeCanvas from "../components/3dmodels/cube/Cube";

const Home = () => {
  return (
    <>
      <article className="home">
        <h1>
          <small>Hi, I am</small>
          <br />
          Saravanan Lakshmanan
        </h1>
      </article>
      <CubeCanvas />
    </>
  );
};

export default Home;
