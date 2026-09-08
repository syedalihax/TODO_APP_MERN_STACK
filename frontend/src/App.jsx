import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"

const App = () => {
    return (
        <>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>

    )
}

export default App
