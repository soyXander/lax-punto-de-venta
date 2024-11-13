import Menu from '../components/Menu'

const Layout = () => {

  return (
    <div className='min-h-dvh w-full flex bg-red-300'>
      <div className='bg-green-300 w-1/6'>
        <Menu />
      </div>
      <div className='bg-blue-300 w-full'>
        <header className='bg-yellow-300 h-'>
          <h1>Header</h1>
        </header>
        <main>
          
        </main>
      </div>
    </div>
  )
}

export default Layout
