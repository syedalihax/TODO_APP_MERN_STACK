import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Navbar = (props) => {
  const navigate = useNavigate()
  let Nav2 = false

  // Check if user is authorized

  if (props.position === "authorized") {
    Nav2 = true
  }

  // State for mobile menu drawer and profile modal

  const [openMenu, setOpenMenu] = useState(false)
  const [profile, setProfile] = useState(false)

  //profile data fetching...

  let [userData, setUserData] = useState(null)
  let [loading, setLoading] = useState(false)
  let [err, setErr] = useState('')

  // profile data fetching API call

  const fetchData = async () => {
    if (userData) {
      return
    }

    const token = localStorage.getItem('token')

    //check if token is available

    if (!token) {
      return navigate('/login')
    }
    // fetch userData 
    try {
      setLoading(true)

      const fetchedData = await axios.get(
        import.meta.env.VITE_API_URL + '/api/users/profile',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      if (fetchedData.data.success == true) {
        setTimeout(() => {
          setUserData(fetchedData.data.userData)
          
          return userData

        }, 1000);
      }
    } catch (error) {
      console.log(error.message)
      return setErr(error.message)
    } finally { setLoading(false) }
  }

  // Handle user logout API call

  const logOutHandler = async () => {
    let token = localStorage.getItem('token')

    if (!token) {
      return navigate('/login')
    }
    try {

      const outResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        null,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      if (outResponse.data.success == true) {

        localStorage.removeItem('token')
        navigate('/login')
      }


    } catch (error) {
      return console.log(error.message)
    }
  }
  return (
    <>
      {/* Main Navbar */}
      <nav className="select-none w-full  h-20 flex items-center px-5 sm:px-10 md:px-10 lg:px-15 justify-between ">

        {/* Logo Section */}
        <div className="flex justify-center items-center w-fit gap-2">
          <img className="w-10 sm:w-12 md:w-15" src="/notes.png" alt="logo" />
          <h1 className="text-xl sm:text-2xl sm:font-semibold md:text-3xl md:font-semibold">KEEP NOTES</h1>
        </div>

        {/* Desktop Menu */}
        {
          Nav2 ?
            <div className="hidden sm:flex text-xl font-medium gap-5 justify-center items-center">
              <button className="bg-btn hover:bg-[#9c4de5] py-2 px-4 rounded-lg text-white cursor-pointer" onClick={() => { setProfile(true), setOpenMenu(false) }}>Profile</button>
              <button className="bg-red-500 hover:bg-primary py-2 px-4 rounded-lg text-white cursor-pointer" onClick={() => { logOutHandler(), setOpenMenu(false) }}>LogOut</button>
            </div>
            :
            <div className="hidden sm:flex text-xl font-medium gap-5 justify-center items-center">
              <button onClick={() => { navigate('/') }}>Home</button>
              <button onClick={() => { navigate('/login') }}>Login</button>
              <button className="bg-btn hover:bg-[#9c4de5] py-2 px-4 rounded-lg text-white cursor-pointer" onClick={() => { navigate('/signup') }}>Start for Free</button>
            </div>
        }

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <button onClick={() => {
            setOpenMenu(true)
          }}>

            {/* burger icon */}
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
          </button>
          {/* Mobile Drawer */}
          <div className={`select-none fixed z-10 bg-gray-700/20 backdrop-blur-md border border-white/30 w-[45%] h-full top-0 right-0 border-l transform
        transition-transform duration-400 
    ${openMenu ? "translate-x-0" : "translate-x-full"}`}>

            {/* Close Button */}
            <button
              className="w-6 h-6 ml-2  mt-7 text-red-600"
              onClick={() => {
                setOpenMenu(false)
              }}>

              <svg
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
            </button>

            {/* Mobile Links */}
            {Nav2 ?
              <div className="flex flex-col w-full text-left gap-1 items-start pl-3 mt-5">
                <button onClick={() => { setOpenMenu(false), setProfile(true), fetchData() }}>Profile</button>
                <button onClick={() => { setOpenMenu(false), logOutHandler() }}>LogOut</button>
              </div>
              :
              <div className="flex flex-col w-full text-left gap-1 items-start pl-3 mt-5">
                <button onClick={() => { setOpenMenu(false), navigate('/') }}>Home</button>
                <button onClick={() => { setOpenMenu(false), navigate('/signup') }}>SignUp</button>
                <button onClick={() => { setOpenMenu(false), navigate('/login') }}>Login</button>
              </div>}
          </div>

        </div>
      </nav>

      {/* User Profile Modal */}
      {profile &&
        <div onClick={() => { setProfile(false) }} className="select-none top-0 fixed w-full h-full bg-black/70 px-5 backdrop-blur-sm">

          <div onClick={(e) => { e.stopPropagation() }}
            className="z-20 flex items-center  flex-col bg-gray-200 w-full min-h-[60%] max-h-[80%] rounded-2xl mt-16 mx-auto p-5">
            <h1 className="text-2xl mb-5">User Information</h1>
            {loading ?
              <div className="w-full">

                <p className="my-2 text-lg">Loading...</p>
              </div>
              :
              <div className="w-full">

                <p className="my-2 text-lg">UserName : { }</p>
                <p className="my-2 text-lg">Email : { }</p>
              </div>
            }
          </div>
        </div>
      }
    </>
  )
}

export default Navbar
