import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className='text-black flex justify-between px-16 items-center w-screen h-20 bg-app-bg select-none'>
      <div className="flex justify-center gap-2 items-center">
        <img className="w-15" src="/notes.png" alt="" />
        <h1 className="text-3xl font-bold ">KEEP NOTES</h1>
      </div>
        <ul className="mr-10 flex justify-center gap-5 text-xl items-center font-semibold">
            <li className="invisible cursor-pointer hover:scale-105 select-none"><Link to={"/"}>Home</Link></li>
            <li className="invisible cursor-pointer hover:scale-105 select-none"><Link to={"/login"}>Login</Link></li>
            <button className="invisible bg-[#964adc] hover:bg-btn rounded-2xl text-app-bg py-2 px-4 cursor-pointer select-none"><Link to={"/signup"}>Start for Free</Link></button>
        </ul>
    </nav>
  )
}

export default Nav
