import React from "react";
import CanvasWrapper from "./utils/CanvasWrapper";
import { useGLTF } from "@react-three/drei";

const Skills = () => {
  const react = useGLTF("/models/react.glb");
  const js = useGLTF("/models/js.glb");

  return (
    <CanvasWrapper cameraPosition={{ position: [20, 3, 15], fov: 25 }}>
      <mesh>
        <hemisphereLight intensity={1} groundColor="black" />
        <pointLight intensity={1} />
        <primitive object={react.scene} />
        <primitive object={js.scene} />
      </mesh>
    </CanvasWrapper>
  );
};

export default Skills;
