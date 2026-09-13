import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (

        <div className=' relative md:px-10 sm:py-20 py-10 flex select-none h-full w-full '>
            {/* parent div  */}
            <div className='md:flex md:mt-15 justify-between gap-5 overflow-hidden w-full mx-5 sm:mx-20 md:mx-auto md:w-240 shadow-2xl shadow-primary border-2 border-primary rounded-2xl'>
                {/* form div */}
                <div className=' max-w-120 md:pl-10 sm:max-w-160 md:w-[50%] mx-auto md:mx-0  p-5 '>
                    <div className='w-fit h-fit p-1 rounded-full text-btn border border-btn md:border-2'>
                        <Link to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>

                        </Link>
                    </div>
                    <h1 className='text-3xl md:text-4xl font-semibold text-center my-2 mt-3 text-primary'>Join Keep Notes</h1>
                    <p className='text-sm text-center mb-5 text-btn md:text-lg'>Create Your Account in Seconds</p>
                    <div >
                        <form className='flex flex-col justify-center gap-1 border-t pt-5 border-primary'>
                            <label htmlFor='username' className='text-btn font-medium text-lg'>User Name:</label>
                            <input id='username' autoComplete='username' className='text-md text-primary/70 border py-2 px-3 outline-0 border-btn rounded-md mb-4 md:font-semibold'
                                value={userName}
                                onChange={(e) => { setUserName(e.target.value) }}
                                type="text"
                            />
                            <label className='text-btn font-medium text-lg' htmlFor='email'>Email:</label>
                            <input id='email' autoComplete='email' className='text-md text-primary/70 border py-2 px-3 outline-0 border-btn rounded-md mb-4 md:font-semibold'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email"
                            />
                            <label htmlFor='password' className='text-btn font-medium text-lg'>Password:</label>
                            <input id='password' autoComplete='off' className='text-md text-primary/70 border py-2 px-3 outline-0 border-btn rounded-md mb-4 md:font-semibold'
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <div className='w-full flex justify-between gap-1 items-center'>

                                <button type='submit' className='bg-primary md:px-10 md:text-lg text-white w-fit py-2 px-5 rounded-lg ml-auto'>
                                    SignUp
                                </button>
                            </div>
                        </form>
                        <p className='my-5'>Already have an account? <span className='underline text-btn font-semibold'><Link to={'/login'}>Login</Link></span></p>
                    </div>
                </div>

                {/* image div */}
                <div className='hidden md:block md:w-[50%] md:h-full md:bg-[url("/reg.jfif")] bg-center bg-cover'></div>
            </div>
        </div>
    )
}

export default Signup
