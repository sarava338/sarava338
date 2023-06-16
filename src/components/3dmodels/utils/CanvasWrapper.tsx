import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const CanvasWrapper = ({ cameraPostion, zoom = false, children }: any) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={cameraPostion}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={zoom} />
        {children}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CanvasWrapper;
