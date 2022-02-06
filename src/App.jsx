import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import Café from '../src/components/Café'
import MachineCafé from '../src/components/MachineCafé'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Café" element={<Café />} />
        <Route path="/MachineCafé" element={<MachineCafé />} />
      </Routes>
    </div>
  )
}
export default App
