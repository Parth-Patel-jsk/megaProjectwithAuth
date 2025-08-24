import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { IdeasProvider } from './lib/context/ideas'

function Navbar() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  return (
    <nav>
      <a href="/">Idea tracker</a>
      <div>
        {user ? (
          <>
            <span>{user.email}</span>
            <button type="button" onClick={() => {
              authService.logout()
              dispatch(logout())
            }}>
              Logout
            </button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const isLoginPage = window.location.pathname === "/login"

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  if (loading) return null

  return (
    <IdeasProvider>
      <Navbar />
      <main>{isLoginPage ? <Login /> : <Home />}</main>
    </IdeasProvider>
  )
}

export default App
