import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='text-white flex justify-between px-30 items-center w-full h-20 bg-blue-800'>
        <h1 className="text-3xl font-bold ">KEEP NOTES</h1>
        <ul className="mr-10 flex justify-center gap-5 text-2xl items-center font-semibold">
            <li className="cursor-pointer hover:text-blue-100 select-none"><Link to={"/"}>Home</Link></li>
            <li className="cursor-pointer hover:text-blue-100 select-none"><Link to={"/signup"}>SignUp</Link></li>
            <li className="cursor-pointer hover:text-blue-100 select-none"><Link to={"/login"}>Login</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
