import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import {Header, Footer} from './components';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData)=> {
      if(userData) {
        dispatch()
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> (setLoading(false)))
      
  }, [])

  return !loading ? (
    <div className='min-h-sc'>
      <div>
        <Header />
        <Footer />
      </div>
    </div>
  ) : null
}

export default App