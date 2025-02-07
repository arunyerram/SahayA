// import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

// const Character = ({ currentAnimationName }) => {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF("/models/stacy.glb");
//   const { actions } = useAnimations(animations, group);
//   const texture = useTexture("/textures/stacy.jpg");

//   useEffect(() => {
//     actions[currentAnimationName].reset().fadeIn(0.5).play();
//     return () => actions[currentAnimationName].fadeOut(0.5);
//   }, [currentAnimationName]);

//   return (
//     <>
//     <group ref={group} dispose={null}>
//       <group name="Scene">
//         <group name="Stacy" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//           <skinnedMesh
//             name="stacy"
//             geometry={nodes.stacy.geometry}
//             material={nodes.stacy.material}
//             skeleton={nodes.stacy.skeleton}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <meshStandardMaterial map={texture} map-flipY={false} />
//           </skinnedMesh>
//           <primitive object={nodes.mixamorigHips} />
//         </group>
//       </group>
//     </group>
//     </>
    
//   );
// };

// useGLTF.preload("/models/stacy.glb");

// export default Character;








import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

const Character = ({ glbPath, texturePath, currentAnimationName, position, scale }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(glbPath);
  const { actions } = useAnimations(animations, group);
  const texture = useTexture(texturePath);

  // Create a new material with the loaded texture
  const material = new THREE.MeshStandardMaterial({ map: texture });

  useEffect(() => {
    if (actions[currentAnimationName]) {
      actions[currentAnimationName].reset().fadeIn(0.5).play();
      return () => actions[currentAnimationName].fadeOut(0.5);
    }
  }, [currentAnimationName, actions]);

  return (
    <group ref={group} position={position} scale={scale} dispose={null}>
      <group name="Scene">
        <group name="CharacterModel" rotation={[Math.PI / 2, 0, 0]}>
          <skinnedMesh
            name="characterMesh"
            geometry={nodes.stacy.geometry}
            material={material} // Apply custom material
            skeleton={nodes.stacy.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

export default Character;
