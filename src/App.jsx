import './App.css'
import {Header, Footer} from './components/index'
function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <div>
        <h1>Hello this is my new project</h1>
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default App