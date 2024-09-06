import Login from "./login/login";
import CreateUser from "./CreateUser";

const Home = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center h-screen space-y-6 bg-slate-300">
        <Login/>
        <CreateUser/>
      </div>
    </>
   );
}

export default Home;