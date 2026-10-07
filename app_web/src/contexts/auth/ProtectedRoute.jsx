import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function ProtectedRoute() {
  const {
    user,
    role,
    loading,
  } = useAuth()

  if (loading) {
    return <p>Verificando autenticação...</p>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (role !== 'manager' && role !== 'admin') {
    return (
      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <div>
          <h1>Acesso não autorizado</h1>

          <p>
            Esta área é destinada aos gestores do
            Olhar Urbano.
          </p>
        </div>
      </main>
    )
  }

  return <Outlet />
}

export default ProtectedRoute