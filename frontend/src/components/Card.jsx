const Card = (props) => {
  return (
    <div className="flex flex-col rounded-lg bg-primary bg-opacity-70 hover:bg-opacity-100 max-w-44 p-3 text-align-left">
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

export default Card
