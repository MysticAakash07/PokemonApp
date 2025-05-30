import Navbar from "./sections/Navbar"
import Wrapper from "./sections/Wrapper"
import Footer from "./sections/Footer"
import Background from "./components/Background"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import "./scss/index.scss"
import Search from "./pages/Search"
import MyList from "./pages/MyList"
import About from "./pages/About"
import Compare from "./pages/Compare"
import Pokemon from "./pages/Pokemon"

function App() {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<Search />} path="/search"></Route>
            <Route element={<MyList />} path="/list"></Route>
            <Route element={<About />} path="/about"></Route>
            <Route element={<Compare />} path="/compare"></Route>
            <Route element={<Pokemon />} path="/pokemon"></Route>
            <Route element={<Navigate to="/pokemon/1" />} path="*"></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
