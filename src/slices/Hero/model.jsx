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
        shadows={true}
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 35], fov: 30, near: 1, far: 50 }}
        legacy={true}
      >
        <Suspense fallback={null}>
          <Logos />
          <ContactShadows
            position={[0, -8, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <ambientLight intensity={1.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Logos(props) {
  useGLTF.preload("model/icon.glb");

  const soundEffects = [
    new Audio("/Sounds/impactBell_heavy.ogg"),
    new Audio("/Sounds/impactMetal_medium.ogg"),
    new Audio("/Sounds/impactMining.ogg"),
    new Audio("/Sounds/impactWood_heavy.ogg"),
  ];

  const material = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.2 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.3 }),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 }),
    new THREE.MeshStandardMaterial({ color: 0x6f73d2, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xb1f8f2, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xba5a31, roughness: 0.2 }),
    new THREE.MeshStandardMaterial({ color: 0x235789, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xf51aa4, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x004346, roughness: 0.3 }),
    new THREE.MeshStandardMaterial({ color: 0x172a3a, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x086788, roughness: 0.3 }),
    new THREE.MeshStandardMaterial({
      color: 0x07a0c3,
      roughness: 0.1,
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2f0a28,
      roughness: 0.8,
      metalness: 0.6,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xe2adf2,
      roughness: 0.2,
      metalness: 0.2,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x574ae2,
      roughness: 0.5,
      metalness: 0.3,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x9799ca,
      roughness: 0.3,
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xe6f8b2,
      roughness: 0.2,
      metalness: 0.2,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2980b9,
      roughness: 0.3,
      metalness: 0.3,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.2,
      metalness: 0.6,
    }),
  ];

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  function getRandomMaterial() {
    return gsap.utils.random(material);
  }

  function handleClick(e) {
    const mesh = e.object;
    console.log(e);
    // console.log(mesh)
    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 3)}`,
      y: `+=${gsap.utils.random(0, 3)}`,
      z: `+=${gsap.utils.random(0, 3)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  const { nodes, materials } = useGLTF("model/icon.glb");
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -Math.PI * 0.5, 0]} ref={meshRef} visible={visible}>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <group
            position={[-1.95, -1.846, -6.052]}
            scale={[0.854, 1.283, 1.283]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube074.geometry}
              material={materials["base_0.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube074_1.geometry}
              material={materials["SVGMat.003"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <group position={[0.812, 1.072, 5.794]} scale={[1.351, 2.03, 2.03]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials["SVGMat.011"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_1.geometry}
              material={materials["SVGMat.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_2.geometry}
              material={materials["SVGMat.012"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
          <group
            position={[-0.608, 6.638, 1.945]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={7.568}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve_1.geometry}
              material={materials["Material.044"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <group
            position={[-2.025, 3.557, 4.09]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={36.519}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve004.geometry}
              material={materials["SVGMat.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve004_1.geometry}
              material={materials["Material.004"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
          <group
            position={[-1.177, -4.219, -3.038]}
            rotation={[0, -1.571, 0]}
            scale={1.456}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube020.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube020_1.geometry}
              material={materials["Material.049"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={2.5}>
          <group
            position={[1.419, 3.733, -0.754]}
            rotation={[0, -1.571, 0]}
            scale={1.169}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube033.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube033_1.geometry}
              material={materials["Material.034"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <group
            position={[-1.146, -5.565, -0.18]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.681}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube029.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube029_1.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube029_2.geometry}
              material={materials["Material.008"]}
            />
          </group>
        </Float>

        {/* Three js */}
        <Float speed={4} rotationIntensity={4} floatIntensity={1}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.threejs.geometry}
            material={materials.Material_0}
            position={[0, -0.005, -0.476]}
            rotation={[0, 1.571, 0]}
            scale={[0.064, 0.064, 0.131]}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
        </Float>

        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
          <group
            position={[0.658, -4.892, 5.677]}
            rotation={[0, 0, 0.003]}
            scale={[6.945, 24.965, 25.096]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013_1.geometry}
              material={materials["Material.002"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <group
            position={[0.551, 5.54, -3.189]}
            rotation={[Math.PI / 2, -0.004, -Math.PI / 2]}
            scale={14.82}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve002_1.geometry}
              material={materials["SVGMat.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve002_2.geometry}
              material={materials["Material.012"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <group position={[0.32, 1.061, -7.22]} scale={[0.736, 1.106, 1.106]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube110.geometry}
              material={materials["base_0.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube110_1.geometry}
              material={materials["Material.013"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <group
            position={[0.146, -3.858, 2.506]}
            rotation={[Math.PI / 2, 0.001, -Math.PI / 2]}
            scale={24.273}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve001_1.geometry}
              material={materials["SVGMat.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve001_2.geometry}
              material={materials["Material.014"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <group
            position={[-1.365, 2.858, -4.707]}
            scale={[1.309, 1.966, 1.966]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2351.geometry}
              material={materials["base_0.028"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2351_1.geometry}
              material={materials["base_0.029"]}
            />
          </group>
        </Float>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <group
            position={[-0.854, -1.079, 4.315]}
            scale={[1.024, 1.538, 1.538]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2358.geometry}
              material={materials["Material.007"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2358_1.geometry}
              material={materials["base_0.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2358_2.geometry}
              material={materials["Material.010"]}
            />
          </group>
        </Float>
      </group>
    </group>
  );
}
