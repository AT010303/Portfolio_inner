"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  Environment,
  Wireframe,
} from "@react-three/drei";
import { Suspense, useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGLTF } from "@react-three/drei";

export default function Model() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square  md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Logos />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Logos(props) {

  const soundEffects = [
    new Audio("/Sounds/impactBell_heavy.ogg"),
    new Audio("/Sounds/impactMetal_medium.ogg"),
    new Audio("/Sounds/impactMining.ogg"),
    new Audio("/Sounds/impactWood_heavy.ogg"),
  ];

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  function handleClick(e) {
    const mesh = e.object;
    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 3)}`,
      y: `+=${gsap.utils.random(0, 3)}`,
      z: `+=${gsap.utils.random(0, 3)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
    });

  }

  const ai = useGLTF("model/AI.glb");
  const aiRef = useRef();



  return (
    <group {...props} dispose={null}>
      <Float speed={4} rotationIntensity={4} floatIntensity={5}>
        <group
          ref={aiRef}
          onClick={handleClick}
          onPointerOut={handlePointerOut}
          onPointerOver={handlePointerOver}
        >
          {/* <mesh
            castShadow
            receiveShadow
            geometry={ai.nodes.Cube074.geometry}
            material={ai.materials["base_0.001"]}
            rotation={[0, -Math.PI / 2, 0]}
          /> */}
          <mesh
            castShadow
            receiveShadow
            geometry={ai.nodes.Cube074_1.geometry}
            material={ai.materials["SVGMat.003"]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.5, 1.5, 1.5]}
          />
        </group>
      </Float>
    </group>
  );
}
