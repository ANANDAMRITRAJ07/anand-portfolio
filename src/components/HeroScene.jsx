import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Shape() {
  const group = useRef(null);
  const accent = useMemo(() => getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim() || "#a78bfa", []);

  useFrame((state, delta) => {
    group.current.rotation.x += delta * 0.15;
    group.current.rotation.y += delta * 0.2;
    group.current.position.x += (state.pointer.x * 0.7 - group.current.position.x) * 0.05;
    group.current.position.y += (state.pointer.y * 0.5 - group.current.position.y) * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.7, 1]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.7} wireframe />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial color="#0a0a0a" emissive={accent} emissiveIntensity={0.15} metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }} eventSource={document.getElementById("root")} eventPrefix="client">
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={30} />
      <Shape />
    </Canvas>
  );
}

export default HeroScene;