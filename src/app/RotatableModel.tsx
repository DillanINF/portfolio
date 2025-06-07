"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const gltf = useGLTF("/jokowi.glb");
  return <primitive object={gltf.scene} scale={9} position={[0, -8, 0]} />;
}

export default function RotatableModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 50], fov: 20 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls 
          enablePan={false}
          enableZoom={false} // Menonaktifkan zoom
          enableRotate={true} // Mengaktifkan rotasi
          autoRotate 
          autoRotateSpeed={0.8} // Kecepatan putar otomatis
        />
      </Canvas>
    </div>
  );
} 