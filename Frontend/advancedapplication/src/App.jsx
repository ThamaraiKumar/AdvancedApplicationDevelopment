import './App.css'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import { Suspense } from 'react'
import AdminDashboard from './components/admin/AdminDashboard'
import UserDashboard from './components/user/UserDashboard'
import EnrolledCourse from './components/user/EnrolledCourse'
import Settings from './components/admin/Settings'
import GetUsers from './components/admin/GetUsers'
import ShowAcademies from './components/admin/ShowAcademies'
import AddAcademy from './components/admin/AddAcademy'


function App() {

  return (
    <div>
    <BrowserRouter>
    <Suspense fallback={<div><img src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'/></div>}>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
          <Route path='/user/dashboard' element={<UserDashboard/>}/>
          <Route path='/user/emrollement' element={<EnrolledCourse/>}/>
          <Route path='/admin/settings' element={<Settings/>}/>
          <Route path='/admin/addacademy' element={<AddAcademy/>}/>
          <Route path='/admin/showacademies' element={<ShowAcademies/>}/>
          <Route path='/admin/users' element={<GetUsers/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  )
}

export default App
