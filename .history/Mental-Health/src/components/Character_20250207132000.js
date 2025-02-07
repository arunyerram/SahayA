import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

const Character = ({ currentAnimationName }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/stacy.glb");
  const { actions } = useAnimations(animations, group);
  const texture = useTexture("/textures/stacy.jpg");

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

useGLTF.preload("/models/stacy.glb");

export default Character;





// // src/components/Character.js
// import React, { useRef } from "react";
// import { useGLTF, useTexture } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// const Character = ({ glbPath, texturePath, position, scale }) => {
//   const character = useGLTF(glbPath);
//   const texture = useTexture(texturePath);
//   const ref = useRef();

//   // Rotate the character slowly for a better view
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.005;
//     }
//   });

//   return (
//     <group ref={ref} position={position} scale={scale}>
//       <primitive object={character.scene} />
//     </group>
//   );
// };

// export default Character;
