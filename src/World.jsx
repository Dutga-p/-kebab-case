/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import House from "./House";
const World = () => {
  const cameraSettings={
    position: [2,2,5],
    fov: 45,
  }
  return (
    <>
    <h1 className=" z-10 absolute text-green">Hola</h1>
    <Canvas camera={cameraSettings}>
      <OrbitControls/>
      <ambientLight intensity={3.5}/>
      <directionalLight position={[3,5,10]} intensity={5}/>
      <House/>
    </Canvas>
    </>
  )
};

export default World;