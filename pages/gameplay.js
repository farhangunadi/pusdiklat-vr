import React from "react";
import { Sky } from "@react-three/drei";
import { BaseScene } from "../components/ui/BaseScene";
import BaseCharacter from "../components/ui/BaseCharacter";
import Box from "../components/basic_compt/Box";
import { Tree } from "../components/basic_compt/Tree.jsx";
import styles from "../styles/Gameplay.module.css";

function Gameplay() {
  return (
    <>
      <BaseScene>
        <Box
          text={false}
          position={[0, 0.5, 5]}
          args={[3, 1, 1.3]}
          color="green"
        />
        <Box
          text={false}
          position={[15, 0, 0]}
          args={[30, 0.1, 5]}
          color="black"
        />
        <group>
          <Tree position={[1, 0, -3]} />
          <Tree position={[5, 0, -3]} />
          <Tree position={[10, 0, -3]} />
          <Tree position={[15, 0, -3]} />
          <Tree position={[20, 0, -3]} />
          <Tree position={[25, 0, -3]} />
        </group>
        <group>
          <Tree position={[1, 0, 3]} />
          <Tree position={[5, 0, 3]} />
          <Tree position={[10, 0, 3]} />
          <Tree position={[15, 0, 3]} />
          <Tree position={[20, 0, 3]} />
          <Tree position={[25, 0, 3]} />
        </group>

        <BaseCharacter
          controls
          position={[0, 2, 0]}
          args={[0.8]}
          color="yellow"
        />
        <Sky />
      </BaseScene>
      <div className={styles.dot} />
    </>
  );
}

export default Gameplay;
