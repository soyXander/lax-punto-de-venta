import logo from "../assets/logo.png"

const Logo = (prop) => {
  return (
    <a href="/" className={prop.size}>
        <img src={logo} />
      </a>
  )
}

export default Logo
