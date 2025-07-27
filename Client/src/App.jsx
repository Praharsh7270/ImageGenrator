import './App.css'
import Navbar from './Components/Navbar'
import BuyCredit from './Pages/BuyCredit'
import Home from './Pages/Home'
import Result from './Pages/Result'
import { Routes , Route } from 'react-router-dom'
import Fotter from './Components/Fotter'
import Login from './Components/Login'

function App() {
  return (
    <>
      <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50 overflow-hidden'>
        <Navbar />
        <Login/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buycredit" element={<BuyCredit />} />
        </Routes>

        <Fotter/>
        
      </div>
    </>
  )
}

export default App
