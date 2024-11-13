const Login = () => {
  return (
      <div className="min-w-full flex mx-auto justify-center items-center bg-gray-600 ">
        <form className="text-cyan-500 flex flex-col m-20 p-10 bg-blue-950 border rounded-lg">
            <label>
              Nombre de Usuario 
            </label>
              <input
                className=" text-center borde bg bg-blue-950 border rounded-lg"
                type="text"
                placeholder="soyusuario1234"
              />

            <label>
              Contraseña
            </label>
              <input
                className="text-center bg bg-blue-950  border rounded-lg"
                type="password"
                placeholder="*********"
              />
      

        
          <button className="px-9 text-blue-950-950 bg-blue-950 border rounded-lg  mt-20">
            Iniciar sesion
          </button>
        </form>
        
      </div>
    
  );
};
export default Login;
