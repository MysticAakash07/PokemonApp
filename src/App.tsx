import Navbar from "./sections/Navbar"
import Footer from "./sections/Footer"
import Background from "./components/Background"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer, ToastOptions, toast } from "react-toastify"
import "react-toastify/ReactToastify.css"

import "./scss/index.scss"
import Search from "./pages/Search"
import MyList from "./pages/MyList"
import About from "./pages/About"
import Compare from "./pages/Compare"
import Pokemon from "./pages/Pokemon"
import { useEffect } from "react"
import { clearToasts, setUserStatus } from "./app/slices/AppSlice"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { onAuthStateChanged } from "firebase/auth"
import { firebaseAuth } from "./utils/FirebaseConfig"

function App() {
  const { toasts } = useAppSelector(({ app }) => app)
  const dispatch = useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, currentUser => {
      if (currentUser) {
        dispatch(setUserStatus({ email: currentUser.email }))
      }
    })
  }, [dispatch])

  useEffect(() => {
    if (toasts.length) {
      const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      }
      toasts.forEach((message: string) => {
        toast(message, toastOptions)
      })

      dispatch(clearToasts())
    }
  }, [toasts, dispatch])

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
            <Route element={<Pokemon />} path="/pokemon/:id"></Route>
            <Route element={<Navigate to="/pokemon/1" />} path="*"></Route>
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
