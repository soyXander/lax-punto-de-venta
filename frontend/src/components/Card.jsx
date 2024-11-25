const Menu = (props) => {
  return (
    <div className=" flex-4 border border- rounded-lg  bg-primary bg-opacity-60 hover:bg-opacity-80  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded- focus:ring-gray-200 focus:border-green-200 block  p-3 text-align-left tex ">
      <div>
        <img
          src={props.imgUrl}
          alt=""
        />
      </div>
      <br />
      <div>
        {props.titulo}
      </div>
    </div>
  )
}

export default Menu
