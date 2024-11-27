import PropTypes from "prop-types"
import Menu from "../components/Menu"
import Header from "../components/Header"

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="flex min-h-dvh w-full">
        <div className="w-1/6">
          <Menu />
        </div>
        <div className="w-full bg-gray-100">
          <main>{props.component}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  component: PropTypes.element.isRequired,
}

export default Layout
