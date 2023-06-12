import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../Loader";

const Cube = () => {
  const cube = useGLTF("/cube.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={cube.scene} />
    </mesh>
  );
};

const CubeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={< CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Cube />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;