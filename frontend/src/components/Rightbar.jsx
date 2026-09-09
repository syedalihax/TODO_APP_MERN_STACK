import { Link } from "react-router-dom"

const Rightbar = () => {
    return (
        <div className='select-none fixed z-10 bg-gray-300 w-28 h-full top-0 right-0 border-l'>
            <svg
                className="w-6 h-6 ml-auto mr-5 mt-7 text-red-600"
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
            </svg>

            <div className="flex flex-col w-full text-left gap-1 items-start pl-5 mt-5">
                <button><Link to={'/'}>Home</Link></button>
                <button><Link to={'/signup'}>Signup</Link></button>
                <button><Link to={'/login'}>Login</Link></button>
            </div>
        </div>
    )
}

export default Rightbar
