/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { FirstPersonControls } from "@react-three/drei"; // Importa FirstPersonControls
import useAuthStore from "./stores/use-auth-store";
import House from "./House";
import CosineBall from "./CosineBall";
import { useNavigate } from "react-router-dom";

const World = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const cameraSettings = {
    position: [2, 2, 5],
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
            <p className="text-xl text-white">BIENVENIDO, {user.displayName}</p>
            <br />
            <button 
              className="text-white bg-red-500 p-2 rounded-md transition transform hover:scale-110 hover:font-bold" 
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
      <Canvas camera={cameraSettings}>
        <FirstPersonControls /> {/* Usar FirstPersonControls en lugar de OrbitControls */}
        <ambientLight intensity={3.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.0} color="white" castShadow/>
        <CosineBall />
      </Canvas>
    </>
  );
};

export default World;