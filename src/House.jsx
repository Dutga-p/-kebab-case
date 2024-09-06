import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const House = () => {
  const meshRef = useRef();
  const [time, setTime] = useState(0);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    setTime(t);
    if (meshRef.current) {
      meshRef.current.position.y = Math.cos(t) * 2; // Ajusta el factor 2 según sea necesario
      meshRef.current.position.x = t * 0.5; // Ajusta la velocidad del movimiento horizontal
    }
  });

  return (
    <group ref={meshRef} name="house" scale={[2, 2, 2]}>
      <mesh
        name="roof"
        position={[0, 1.1, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
        scale={1.1}
      >
        <coneGeometry args={[1, 1, 4]} />
        <meshBasicMaterial color={0xFFC300} />
      </mesh>
      <mesh
        name="base_house"
        position={[0, 0, 0]} // Ajuste para centrar la base
        scale={1}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="green" />
      </mesh>
    </group>
  );
};

export default House;
