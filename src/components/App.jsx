import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../style/App.css'
import Login from './Login/Login'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/userInfo' element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
