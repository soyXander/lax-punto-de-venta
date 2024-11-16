const Login = () => {
  return (
    <div className=" min-h-full flex mx-auto justify-center items-center bg-emerald-200 ">
      <form className="text gray-500 bg-emerald-500 text-cyan-500 flex flex-col m-20 p-10  border rounded-lg">
        <label className="text-center text-white">Nombre de Usuario</label>
        <input
          className=" text-center borde bg-emerald-200 border rounded-lg  hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded- focus:ring-white focus:border-blue-500 block  p-1"
          type="text"
          placeholder="soyusuario1234"
        />

        <label>Contraseña</label>
        <input
          className="text-center  bg-emerald-200  border rounded-lg  hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded- focus:ring-gray-200 focus:border-gray-500 block  p-1"
          type="password"
          placeholder="*********"
        />

        <button className="px-9 text-esmerald-500 bg-emerald-200 border rounded-lg  mt-20  hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded- focus:ring-gray-200 focus:border-blue-500 block  p-1">
          Iniciar sesion
        </button>
      </form>
    </div>
  );
};
export default Login;
