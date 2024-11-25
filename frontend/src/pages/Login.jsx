const Login = () => {
  return (
    <div className=" min-h-full flex mx-auto justify-center items-center bg-neutral ">
      <form className="text gray-500 bg-primary text-cyan-500 flex flex-col m-20 p-10  border rounded-lg">
        <label className="font-bold text-center text-secundary text-2lg">Nombre de Usuario</label>
        <input
          className="text-secundary text-center borde bg-base border rounded-lg  hover:bg-neutral hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded- focus:ring-secundary focus:border-blue-500 block  p-1"
          type="text"
          placeholder="soyusuario1234"
        />

        <label className=" font-bold text-secundary">Contraseña</label>
        <input
          className="text-center text-secundary  bg-base  border rounded-lg  hover:bg-neutral hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded- focus:ring-secundary focus:border-gray-500 block  p-1"
          type="password"
          placeholder="*********"
        />

        <button className="font-bold px-9 text-secundary bg-base border rounded-lg  mt-20  hover:bg-neutral hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded- focus:ring-secundary focus:border-blue-500 block  p-1">
          Iniciar sesion
        </button>
      </form>
    </div>
  );
};
export default Login;
