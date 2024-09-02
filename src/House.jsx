import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const House = () =>{
  const houseRef = useRef(null);
  useFrame((state, delta)=>{
    houseRef.current.rotation.y += 0.1 * delta;
    console.log("Imprimiendo");
  })
  return(
  <group ref={houseRef} name="house" scale={[2,2,2]}>
    <mesh
    name="roof"
    // position={[0,1.1,0]}
    position-y={1}
    rotation={[0,Math.PI*0.25,0]}
    scale={1.1}
    >
      <coneGeometry args={[1,1,4]}/>
      <meshStandardMaterial wireframe={true} color={0xFFC300}/>
    </mesh>
    <mesh
    name="base_house"
    scale={1}>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color="green" />
    </mesh>
  </group>
  );
};
export default House;