import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";
import { AnimationMixer } from "three";

export const AnimatedCharacter = ({ emotion }) => {
//   const gltf = useLoader(GLTFLoader, "/path-to-your-3d-model.glb");
  const gltf = useLoader(GLTFLoader, "../public/assets/models/character.jpg");
  const mixerRef = useRef();
  const modelRef = useRef();

  useEffect(() => {
    if (gltf && modelRef.current) {
      const mixer = new AnimationMixer(modelRef.current);
      mixerRef.current = mixer;

      switch (emotion) {
        case "happy":
          mixer.clipAction(gltf.animations[0]).play();
          break;
        case "sad":
          mixer.clipAction(gltf.animations[1]).play();
          break;
        case "relaxed":
          mixer.clipAction(gltf.animations[2]).play();
          break;
        default:
          mixer.clipAction(gltf.animations[0]).play();
      }
    }
    return () => mixerRef?.current?.stopAllAction();
  }, [emotion, gltf]);

  return (
    <>
      {gltf && (
        <primitive
          object={gltf.scene}
          ref={modelRef}
          scale={1.5}
          position={[0, -1, 0]}
        />
      )}
    </>
  );
};
