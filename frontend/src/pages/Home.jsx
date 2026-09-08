import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex justify-center bg-app-bg select-none">
      <div className="w-[52%] pl-15 pr-5 flex flex-col gap-10 justify-center">
        <h1 className=" text-6xl font-medium">Unlock Effortless Productivity. Your Notes, Organized.</h1>
        <p className="text-xl text-[#9249d6]">The simple, powerful web application to capture, organize, and manage your tasks. Start in seconds.</p>
        <button className="bg-primary text-app-bg w-fit mx-auto px-6 py-3 text-2xl rounded-xl cursor-pointer hover:bg-[#f62854]">
          <Link to={'/signup'}>
          Create Your First Note
          </Link>
        </button>
      </div>
      <div className="w-[47%]">
      <img className="w-full mr-auto" src="/hero.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home
