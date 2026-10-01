import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-layout__content">
        <Header />

        <main className="app-layout__main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout