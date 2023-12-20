import './assets/styles/App.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"
import BurgerPage from './assets/Pages/BurgerPage/BurgerPage'
import Error from './assets/Pages/Error/Error'
import Home from './assets/Pages/Home/Home'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/burgerPage' element={<BurgerPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
