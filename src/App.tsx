import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App
