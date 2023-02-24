import React from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Floor from "../basic_compt/Floor";

export const BaseScene = ({ children }) => {
  return (
    <div style={{ padding: "0" }}>
      <Canvas style={{ height: "100vh" }} shadows camera={{ fov: 50 }}>
        <group>
          <ambientLight intensity={0.2} />
          <spotLight penumbra={0.5} position={[10, 10, 5]} castShadow />
        </group>

        <Physics gravity={[0, -9.8, 0]}>
          {children}

          <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />
        </Physics>

        <PointerLockControls />
      </Canvas>
      <Loader />
    </div>
  );
};
