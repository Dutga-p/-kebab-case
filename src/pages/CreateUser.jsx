import daos from "../daos/UserDAO";

function CreateUser() {
  
  return ( 
    <>
      <div className="flex flex-col items-center justify-center bg-slate-300">
        <button className="text-white text-4xl border border-white p-2 rounded-md bg-gradient-to-bl from-blue-400 to-blue-600
        transition transform hover:scale-110 hover:text-black hover:border-2 hover:border-black hover:from-blue-600 hover:to-blue-400 duration-300" >Registrarse</button>
      </div>
    </>
   );
}

export default CreateUser;