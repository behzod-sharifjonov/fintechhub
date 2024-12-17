import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./views/Home"
import Navbar from "./components/Navbar"
import CousePage from "./views/CousePage"
import Footer from "./components/Footer"
import Mentors from "./views/Mentors"
import { createContext, useEffect, useState } from "react"
import Loader from "./DataLoader"
import Contact from "./views/Contact"
import Frontnd from "./views/Frontnd"
import Backend from "./views/Backend"
import Mobile from "./views/Mobile"


export const StateContext = createContext()

function App() {

  const [loading, setLoading] = useState(true);

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    // Simulate an API call or some loading process
    setTimeout(() => {
      setLoading(false);
    }, 100); // Loading for 3 seconds
  }, []);

  return (
    <StateContext.Provider value={{ setShowMenu, showMenu }}>
      {loading ? <Loader /> : <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="toshkentda-dasturlash-kurslari" element={<CousePage />} />
          <Route path="ustozlarimiz" element={<Mentors />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>}



    </StateContext.Provider>
  )
}

export default App
