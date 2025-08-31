import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { IdeasProvider } from './lib/context/ideas'
import  Header  from './components/Header' 
import  Footer  from './components/Footer' 


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const authStatus = useSelector(state => state.auth.status) // Get auth status from Redux
  const isLoginPage = window.location.pathname === "/login"

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        dispatch(logout())
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [dispatch])

  // Show loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    )
  }

  // Conditional rendering based on auth status and current page
  const renderContent = () => {
    // If user is not authenticated and not on login page, show login
    if (!authStatus && !isLoginPage) {
      return <Login />
    }
    
    // If user is authenticated and on login page, redirect to home
    if (authStatus && isLoginPage) {
      // You might want to use React Router for proper navigation
      window.location.href = "/"
      return null
    }
    
    // If on login page and not authenticated, show login
    if (isLoginPage) {
      return <Login />
    }
    
    // Default to home for authenticated users
    return <Home />
  }

  return (
    <IdeasProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </IdeasProvider>
  )
}

export default App