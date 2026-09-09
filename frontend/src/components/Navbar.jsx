import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="select-none w-full  h-20 flex items-center px-5 sm:px-10 md:px-15 lg:px-25 justify-between ">
      <div className="flex justify-center items-center w-fit gap-2">
        <img className="w-10 sm:w-12 md:w-15" src="/notes.png" alt="logo" />
        <h1 className="text-xl sm:text-2xl sm:font-semibold md:text-3xl md:font-semibold">KEEP NOTES</h1>
      </div>
      <div className="hidden sm:flex text-xl font-medium gap-5 justify-center items-center">
        <button ><Link to={'/'}>Home</Link></button>
        <button><Link to={'/login'}>Login</Link></button>
        <button className="bg-btn hover:bg-[#9c4de5] py-2 px-4 rounded-lg text-white cursor-pointer"><Link to={'/signup'}>Start for Free</Link></button>
      </div>
      <div className="sm:hidden">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>

        {/* <svg
          className="w-6 h-6 text-red-600"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
          d="M4 4L16 16M16 4L4 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          />
          </svg> */}
      </div>

    </nav>
  )
}

export default Navbar
