import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { auth } from '../../services/firebase'
import './Login.css'

function Login() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (loading) {
    return <p>Carregando...</p>
  }

  if (user) {
    return (
      <Navigate
        to={location.state?.from?.pathname || '/'}
        replace
      />
    )
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setSubmitting(true)

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      )

      navigate(
        location.state?.from?.pathname || '/',
        { replace: true },
      )
    } catch (loginError) {
      if (loginError.code === 'auth/invalid-credential') {
        setError('E-mail ou senha inválidos.')
      } else if (loginError.code === 'auth/too-many-requests') {
        setError(
          'Muitas tentativas. Aguarde alguns minutos e tente novamente.',
        )
      } else {
        setError(
          'Não foi possível entrar. Verifique a configuração do Firebase.',
        )
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="login-page">
      <section
        className="login-card"
        aria-labelledby="login-title"
      >
        <div className="login-card__brand">
          <span
            className="login-card__mascot"
            aria-hidden="true"
          >
            🐱
          </span>

          <span>Olhar Urbano</span>
        </div>

        <h1 id="login-title">
          Acesso administrativo
        </h1>

        <p className="login-card__description">
          Entre com a conta autorizada para acessar o
          painel de gestão.
        </p>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >
          <label htmlFor="email">
            E-mail
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="seu@email.com"
            autoComplete="email"
            required
          />

          <label htmlFor="password">
            Senha
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Digite sua senha"
            autoComplete="current-password"
            required
          />

          {error && (
            <p
              className="login-form__error"
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? 'Entrando...'
              : 'Entrar'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login