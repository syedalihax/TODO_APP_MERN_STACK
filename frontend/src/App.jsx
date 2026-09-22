import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Protected from "./components/Protected"

const App = () => {
    return (
        <div className="relative">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
            </Routes>
        </div>

    )
}

export default App
