import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, loginGoogleWithPopUp, observeAuthState, loading } =
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
      navigate("/World");
    }
  }, [user, navigate]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);


  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center bg-slate-300">
      <button className="text-white border text-4xl border-white p-2 rounded-md bg-gradient-to-tr from-green-400 to-green-600 
        transition transform hover:scale-110 hover:text-black hover:border-2 hover:border-black hover:from-green-600 hover:to-green-400 duration-300" onClick={handleLogin}>Iniciar sesión</button>
    </div>
    </>
  );
};

export default Login;