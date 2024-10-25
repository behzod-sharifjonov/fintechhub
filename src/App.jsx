import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./views/Home"
import Navbar from "./components/Navbar"


function App() {



  return (
    <>
    <Header />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  )
}

export default App
