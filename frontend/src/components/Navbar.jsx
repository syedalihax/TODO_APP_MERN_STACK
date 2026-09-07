
const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 items-center w-full h-20 bg-blue-800'>
        <h1 className="text-3xl font-bold ">KEEP NOTES</h1>
        <ul className="flex justify-center gap-5 text-2xl items-center font-semibold">
            <li className="cursor-pointer hover:text-blue-100 select-none">SignUp</li>
            <li className="cursor-pointer hover:text-blue-100 select-none">Login</li>
        </ul>
    </nav>
  )
}

export default Navbar
