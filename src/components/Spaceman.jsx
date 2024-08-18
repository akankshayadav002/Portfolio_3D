import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";
import spacemanScene from "../assets/3d/med_astronaut.glb";

const Spaceman = ({ scale }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(spacemanScene);

  // Floating animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.position.y = -0.4 + Math.sin(time * 2) * 0.3; // Floating effect
  });

  return (
    <group ref={group} position={[0.6, 0.01, 0]} scale={scale} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials["Mat.1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials["Mat.3"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material_0}
      />
    </group>
  );
};

const SpacemanCanvas = () => {
  const [scale, setScale] = useState([0.03, 0.03, 0.03]); // Much smaller scale
  const [position, setPosition] = useState([1, 2, 0]); // Centered position

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([0.008, 0.008, 0.008]); // Smaller for mobile
        setPosition([-0.5, -0.3, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([0.009, 0.009, 0.009]); // Adjusted for tablets
        setPosition([0, -0.4, 0]);
      } else {
        setScale([0.01, 0.01, 0.01]); // Desktop size
        setPosition([0, -0.5, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      className={`w-full h-screen bg-transparent z-10`}
      camera={{
        position: [0, 1, 4], // Move camera even further back
        fov: 50,
        near: 0.1,
        far: 1000,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <Spaceman scale={scale} />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
