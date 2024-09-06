/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useAuthStore from "./stores/use-auth-store"
import House from "./House";
import { useNavigate } from "react-router-dom";

const World = () => {
  const { user, logout } = useAuthStore();
  console.log(user);
  const navigate = useNavigate(); 

  const cameraSettings={
    position: [2,2,5],
    fov: 45,
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

   return (
    <>
      <div className="z-10 absolute top-0 right-0 p-4">
        {user && (
          <>
            <p className="text-xl text-green-600">Bienvenido, {user.displayName}</p>
            <button 
              className="text-white bg-red-500 p-2 rounded-md" 
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
      <Canvas camera={cameraSettings}>
        <OrbitControls />
        <ambientLight intensity={3.5} />
        <directionalLight position={[3, 5, 10]} intensity={5} />
        <House />
      </Canvas>
    </>
  );
};

export default World;