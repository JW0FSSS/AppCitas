import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import Gratefulness from './Pages/gratefulness'
import Home from './Pages/Home'

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/thank' element={<Gratefulness/>}/>
    </Routes>
  )
}

export default App
