import { Detail, Form, Home, Landing } from './views'
import { useLocation, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'


function App() {
  const { pathname } = useLocation();

  return (
    <div>

      {pathname !== "/" && <NavBar />}

      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route exact path='/detail' element={<Detail />} />
        <Route exact path='/create' element={<Form />} />
      </Routes>

    </div>
  )
}

export default App
