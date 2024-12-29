

// // import React, { useEffect, useRef } from "react";
// // import { useGLTF, useAnimations } from "@react-three/drei";

// // // Component to render a single character
// // const Character = ({ glbPath, currentAnimationName, position }) => {
// //   const group = useRef();
// //   const { nodes, materials, animations } = useGLTF(glbPath);
// //   const { actions } = useAnimations(animations, group);

// //   useEffect(() => {
// //     if (actions[currentAnimationName]) {
// //       actions[currentAnimationName].reset().fadeIn(0.5).play();
// //       return () => actions[currentAnimationName].fadeOut(0.5);
// //     } else {
// //       console.warn(`Animation "${currentAnimationName}" not found in ${glbPath}`);
// //     }
// //   }, [currentAnimationName, actions, glbPath]);

// //   return (
// //     <group ref={group} position={position} dispose={null}>
// //       <primitive object={nodes.Hips} />
// //       {Object.keys(nodes).map((key) => (
// //         nodes[key].type === "SkinnedMesh" && (
// //           <skinnedMesh
// //             key={key}
// //             name={key}
// //             geometry={nodes[key].geometry}
// //             material={materials[nodes[key].material.name]}
// //             skeleton={nodes[key].skeleton}
// //             morphTargetDictionary={nodes[key].morphTargetDictionary}
// //             morphTargetInfluences={nodes[key].morphTargetInfluences}
// //           />
// //         )
// //       ))}
// //     </group>
// //   );
// // };

// // // Scene to render multiple characters
// // const Scene = () => {
// //   return (
// //     <>
// //       {/* First Character */}
// //       <Character
// //         glbPath="/6758799f130072afa6b4b6da.glb"
// //         currentAnimationName="Idle"
// //         position={[-2, -1, 0]}
// //       />
// //       {/* Second Character */}
// //       <Character
// //         glbPath="/Character2.glb"
// //         currentAnimationName="Wave"
// //         position={[2, -1, 0]}
// //       />
      
      
      

// //     </>
// //   );
// // };

// // export default Scene;

// // // Preload GLTF models
// // useGLTF.preload("/6758799f130072afa6b4b6da.glb");
// // useGLTF.preload("/Character2.glb");



// import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

// const Character = ({ currentAnimationName }) => {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF("/stacy.glb");
//   const { actions } = useAnimations(animations, group);
//   const texture = useTexture("/stacy.jpg");

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

// useGLTF.preload("/stacy.glb");

// export default Character;




// import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

// const Character = ({ glbPath, texturePath, currentAnimationName, position = [0, 0, 0], scale = 1 }) => {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF(glbPath);
//   const { actions } = useAnimations(animations, group);
//   const texture = texturePath ? useTexture(texturePath) : null;

//   useEffect(() => {
//     if (actions[currentAnimationName]) {
//       actions[currentAnimationName].reset().fadeIn(0.5).play();
//     } else {
//       console.warn(`Animation "${currentAnimationName}" not found in ${glbPath}`);
//     }

//     return () => {
//       if (actions[currentAnimationName]) {
//         actions[currentAnimationName].fadeOut(0.5).stop();
//       }
//     };
//   }, [currentAnimationName, actions, glbPath]);

//   return (
//     <group ref={group} position={position} dispose={null} scale={scale}>
//       <group name="Scene">
//         {Object.keys(nodes).map((key) => (
//           nodes[key].type === "SkinnedMesh" && (
//             <skinnedMesh
//               key={key}
//               name={key}
//               geometry={nodes[key].geometry}
//               material={texture ? undefined : materials[nodes[key].material.name]}
//               skeleton={nodes[key].skeleton}
//               morphTargetDictionary={nodes[key].morphTargetDictionary}
//               morphTargetInfluences={nodes[key].morphTargetInfluences}
//             >
//               {texture && <meshStandardMaterial map={texture} map-flipY={false} />}
//             </skinnedMesh>
//           )
//         ))}
//       </group>
//     </group>
//   );
// };

// // Preload GLTF models
// useGLTF.preload("/stacy.glb");
// useGLTF.preload("/6758799f130072afa6b4b6da.glb");
// useGLTF.preload("/Character2.glb");

// export default Character;







import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Character from "./Character";
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  const [allAnimation, setAllAnimation] = useState([
    "golf",
    "idle",
    "jump",
    "pockets",
    "react",
    "rope",
    "shrug",
    "swingdance",
    "wave",
  ]);

  const [currentAnimationName, setCurrentAnimationName] = useState("golf");

  const characters = [
    {
      glbPath: "/stacy.glb",
      texturePath: "/stacy.jpg",
      position: [-6, -1, 0], // Spaced to the left
    },
    {
      glbPath: "/6758799f130072afa6b4b6da.glb",
      texturePath: "/stacy.jpg",
      position: [0, -1, 0], // Centered
    },
    {
      glbPath: "/Character2.glb",
      texturePath: "/stacy.jpg",
      position: [6, -1, 0], // Spaced to the right
    },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 5, 5]} />
        {characters.map((char, index) => (
          <Character
            key={index}
            glbPath={char.glbPath}
            texturePath={char.texturePath}
            currentAnimationName={currentAnimationName}
            position={char.position}
            scale={0.01}
          />
        ))}
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {allAnimation.map((name, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "green",
              color: "white",
              margin: "0.5rem",
              borderRadius: "1rem",
            }}
          >
            <button
              onClick={() => setCurrentAnimationName(name)}
              style={{ color: "white", padding: "1rem", width: "100%" }}
            >
              {name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Model;
