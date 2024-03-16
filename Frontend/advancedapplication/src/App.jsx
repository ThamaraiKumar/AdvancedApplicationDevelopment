import './App.css'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import Login from './Components/Login'
import Home from './components/Home'
import Register from './components/Register'
import { Suspense } from 'react'


function App() {

  return (
    <div>
    <BrowserRouter>
    <Suspense fallback={<div><img src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'/></div>}>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  )
}

export default App
