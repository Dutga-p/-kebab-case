import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } =
    useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDAO.createUser(newUser);
      navigate("/Quiz");
    }
  }, [user, navigate]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-slate-300">
      {user ? (
        <>
          <p className="text-[#030303] text-xl">Bienvenido, {user.displayName}</p>
          <button className="text-base text-[#666]" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <button className="text-white border border-white p-2 rounded-md bg-gradient-to-tr from-blue-500 to-green-500" onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
    </>
  );
};

export default Login;
