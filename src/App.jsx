import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Café from './pages/Café'
import MachineCafé from './pages/MachineCafé'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cafe" element={<Café />} />
        <Route path="/Machinecafe" element={<MachineCafé />} />
      </Routes>
    </div>
  )
}

export default App
