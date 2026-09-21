import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validator from 'validator'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState("")
    const navigate = useNavigate()

    const inputHandler = async (e) => {
        e.preventDefault()
        setError("")

        if (!validator.isEmail(email)) {
            return setError("Please enter a valid email address")
        }

        if (!validator.isStrongPassword(password, { minSymbols: 0, minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1 })) {

            return setError("Password must be at least 1 capital letter , 1 small letter , 1 number and total 8 characters ")
        }
        submitHandler()
    }

    const submitHandler = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
                email, password
            })

            let token = response.data.token

            localStorage.setItem("token", response.data.token)
            setData(response.data.message)
            setTimeout(() => {
                navigate("/")
            }, 3000);
        } catch (error) {
            setError(error.response.data.message || "server side error" || JSON.stringify(error.message) + " -- " + JSON.stringify(error.response?.data))
        } finally {
            setLoading(false)
        }
    }

    return (

        <div className=' relative md:px-10 sm:py-20 py-10 flex select-none h-full w-full '>
            {/* parent div  */}
            {data ?
                <div className='md:flex md:mt-15 justify-center gap-5 overflow-hidden w-full mx-5 sm:mx-20 md:mx-auto md:w-240 shadow-2xl shadow-primary border-2 border-primary rounded-2xl'>
                    <div className='max-w-120  sm:max-w-160 mx-auto md:mx-0 py-20  p-5 md:p-20 '>

                        <p className='text-center text-btn text-2xl font-semibold'> {data} !</p>
                    </div>

                </div> :
                <div className='md:flex md:mt-15 justify-between gap-5 overflow-hidden w-full mx-5 sm:mx-20 md:mx-auto md:w-240 shadow-2xl shadow-primary border-2 border-primary rounded-2xl'>
                    {/* form div */}
                    <div className=' max-w-120 md:pl-10 sm:max-w-160 md:w-[50%] mx-auto md:mx-0  p-5 md:mb-15'>
                        <div className='w-fit h-fit p-1 rounded-full text-btn border border-btn md:border-2'>
                            <Link to={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>

                            </Link>
                        </div>
                        <h1 className='text-3xl md:text-4xl font-semibold text-center my-2 mt-3 text-primary'>WelCome Back</h1>
                        {/* error renderer */}
                        {error ? <p className='mx-auto font-medium w-fit text-sm text-center my-5 text-red-500 md:text-md border-2 bg-red-700/15 border-red-500 rounded px-2 py-1'>{error}</p> : <p className='text-sm text-center mb-5 text-btn md:text-lg'>Create Your Account in Seconds</p>}

                        <div >
                            <form className='flex flex-col justify-center gap-1 border-t pt-5 border-primary' onSubmit={inputHandler}>

                                <label htmlFor='email' className='text-btn font-medium text-lg'>Email:</label>
                                <input className='text-md text-primary/70 border py-2 px-3 outline-0 border-btn rounded-md mb-4 md:font-semibold'
                                    id='email'
                                    autoComplete='email'
                                    value={email}
                                    onChange={(e) => { setError(""), setEmail(e.target.value) }}
                                    required
                                    type="email"
                                />
                                <label htmlFor='password' className='text-btn font-medium text-lg'>Password:</label>
                                <input className='text-md text-primary/70 border py-2 px-3 outline-0 border-btn rounded-md mb-4 md:font-semibold'
                                    id='password'
                                    autoComplete='current-password'
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => { setError(""), setPassword(e.target.value) }}
                                />
                                <button disabled={loading} type='submit' className='bg-primary md:px-10 md:text-lg text-white w-fit py-2 px-5 rounded-lg ml-auto'>
                                    {loading ? "Processing..." : "Login"}
                                </button>
                            </form>
                            <p className='my-5'>Need an account? <span className='underline text-btn font-semibold'><Link to={'/SignUp'}>SignUp</Link></span></p>
                        </div>
                    </div>

                    {/* image div */}
                    <div className='hidden md:block md:w-[50%] md:h-full md:bg-[url("/log.jfif")] bg-center bg-cover'></div>
                </div>
            }
        </div>
    )
}

export default Login
