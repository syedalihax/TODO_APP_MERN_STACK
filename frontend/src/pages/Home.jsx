import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="select-none w-full sm:flex flex-row-reverse h-[89%]">
        <div className="bg-[url('hero.jpg')] bg-cover bg-center  w-full h-[45%] sm:h-[70%] sm:w-[50%] lg:h-[90%]"> </div>

        <div className="p-4 w-full sm:w-[50%] sm:h-[70%] lg:h-[90%] lg:pl-10 flex flex-col justify-center gap-2 ">
          <h1 className="sm:px-8 md:px-15 text-xl sm:font-semibold md:text-2xl lg:text-4xl lg:font-bold">Unlock Effortless Productivity. Your Notes, Organized.</h1>
          <p className="sm:px-8 md:px-15 text-sm my-1 text-btn font-light md:font-medium lg:text-lg">The simple, powerful web application to capture, organize, and manage your tasks. Start in seconds</p>
          <button className="cursor-pointer mx-auto block bg-primary py-3  px-2 rounded-lg text-white mt-5 md:py-3 md:px-4 text-lg"><Link to={"/signup"}>Create Your First Note</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Home
