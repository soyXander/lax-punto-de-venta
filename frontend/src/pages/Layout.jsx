import Menu from '../components/Menu'
import Logo from "../components/Logo"

const Layout = (props) => {

  return (
    <div className='min-h-dvh w-full flex'>
      <div className='w-1/6'>
        <Logo />
        <Menu />
      </div>
      <div className='w-full bg-gray-100'>
        <header>
          <h1>Header</h1>
        </header>
        <main>
          {props.component}
        </main>
      </div>
    </div>
  )
}

export default Layout
