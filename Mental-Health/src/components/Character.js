import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

const Character = ({ currentAnimationName }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Character2.glb");
  const { actions } = useAnimations(animations, group);
  const texture = useTexture("/stacy.jpg");

  useEffect(() => {
    actions[currentAnimationName].reset().fadeIn(0.5).play();
    return () => actions[currentAnimationName].fadeOut(0.5);
  }, [currentAnimationName]);

  return (
    <>
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Stacy" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="stacy"
            geometry={nodes.stacy.geometry}
            material={nodes.stacy.material}
            skeleton={nodes.stacy.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <meshStandardMaterial map={texture} map-flipY={false} />
          </skinnedMesh>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
    </>
    
  );
};

useGLTF.preload("/stacy.glb");

export default Character;

