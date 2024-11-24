import Menu from '../components/Menu'

const Layout = (props) => {

  return (
    <div className='min-h-dvh w-full flex bg-red-300'>
      <div className='bg-green-300 w-1/6'>
        <Menu />
      </div>
      <div className='bg-neutral w-full'>
        <header className='bg-base'>
          <h1>Header</h1>
        </header>
        <main>
          {props.nombre}
        </main>
      </div>
    </div>
  )
}

export default Layout
