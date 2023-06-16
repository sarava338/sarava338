import { Canvas } from "@react-three/fiber";
import JsModel from "./Js";
import ReactModel from "./React";
import CanvasWrapper from "./utils/CanvasWrapper";

const Skills = () => {
  return (
    <>
      <CanvasWrapper rotation={[Math.PI / 2, 0, 0]}>
        <ambientLight />
        <pointLight  />
        <JsModel />
      </CanvasWrapper>
      <CanvasWrapper rotation={[Math.PI / 2, 0, 0]}>
        <ambientLight />
        <pointLight />
        <ReactModel/>
      </CanvasWrapper>
    </>
  );
};

export default Skills;
