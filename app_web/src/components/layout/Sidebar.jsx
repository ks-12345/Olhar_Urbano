import {
  LayoutDashboard,
  Map,
  FileText,
  Construction,
  Ban,
  BarChart3,
  Users,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()

  const menuItems = [
    {
      label: 'Dashboard',
      path: '/',
      icon: LayoutDashboard,
    },
    {
      label: 'Ocorrências',
      path: '/ocorrencias',
      icon: FileText,
    },
    {
      label: 'Mapa',
      path: '/mapa',
      icon: Map,
    },
    {
      label: 'Obras',
      path: '/obras',
      icon: Construction,
    },
    {
      label: 'Interdições',
      path: '/interdicoes',
      icon: Ban,
    },
    {
      label: 'Relatórios',
      path: '/relatorios',
      icon: BarChart3,
    },
    {
      label: 'Usuários',
      path: '/usuarios',
      icon: Users,
    },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__brand-icon">🐱</div>

        <div>
          <strong>Olhar Urbano</strong>
          <span>Painel administrativo</span>
        </div>
      </div>

      <nav
        className="sidebar__navigation"
        aria-label="Navegação principal"
      >
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          const Icon = item.icon

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar__link ${
                isActive ? 'sidebar__link--active' : ''
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar