import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import validator from "validator"


const Signup = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const inputHandler = async (e) => {
        e.preventDefault()
        setError("")
        if (userName.length < 5) {
            return setError("UserName must be at least 5 characters")
        }

        if (!validator.isEmail(email)) {
            return setError("Please enter a valid email address")
        }
        if (!validator.isStrongPassword(password, { minSymbols: 0, minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1 })) {

            console.log(password)

            return setError("Password must be at least 1 capital letter , 1 small letter , 1 number and total 8 characters ")
        }
        submitHandler()
    }
    const submitHandler = async () => {
        try {

            const response = await axios.post("http://127.0.0.1:5000/api/auth/register", {
                userName, email, password
            })
            alert(response.data.message)
navigate('/login')
        } catch (error) {
            setError(error.response.data.message || "server side error")
        }
    }


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
                    {error ? <p className='mx-auto font-medium w-fit text-sm text-center my-5 text-red-500 md:text-md border-2 bg-red-700/15 border-red-500 rounded px-2 py-1'>{error}</p> : <p className='text-sm text-center mb-5 text-btn md:text-lg'>Create Your Account in Seconds</p>}
                    <div >
                        <form onSubmit={(e) => { inputHandler(e) }} className='flex flex-col justify-center gap-1 border-t pt-5 border-primary'>
                            <label htmlFor='username' className='text-btn font-medium text-lg'>User Name:</label>
                            <input id='username' autoComplete='username' className='text-md text-primary/70 border py-2 px-3 outline-0 border-btn rounded-md mb-4 md:font-semibold '

                                required
                                placeholder='peter_52'
                                value={userName}
                                onChange={(e) => { setError(""), setUserName(e.target.value) }}
                                type="text"
                            />
                            <label className='text-btn font-medium text-lg' htmlFor='email'>Email:</label>
                            <input id='email' autoComplete='email' className='text-md text-primary/70 border py-2 px-3 outline-0 border-btn rounded-md mb-4 md:font-semibold'
                                required
                                placeholder='peter.34@gmail.com'
                                value={email}
                                onChange={(e) => { setError(""), setEmail(e.target.value) }}
                                type="email"
                            />
                            <label htmlFor='password' className='text-btn font-medium text-lg'>Password:</label>
                            <input id='password' autoComplete='off' className='text-md text-primary/70 border py-2 px-3 outline-0 border-btn rounded-md mb-4 md:font-semibold'
                                type="password"
                                value={password}
                                onChange={(e) => { setError(""), setPassword(e.target.value) }}
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
