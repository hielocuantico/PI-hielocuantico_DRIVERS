import { Detail, Form, Home, Landing } from './views'
import { useLocation, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'


function App() {
  const { pathname } = useLocation();
  console.log(useLocation());


  return (
    <div>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/detail' element={<Detail />} />
        <Route exact path='/create' element={<Form />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
