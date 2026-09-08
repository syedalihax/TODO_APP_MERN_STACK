import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Signup = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        if (userName.trim() == "" || email.trim() == "" || password == "") {
            return alert("Name , email , password is required")
        }
        submitForm()
    }

    const submitForm = () => {
        console.log(userName)
        console.log(email)
        console.log(password)
        setUserName("")
        setEmail("")
        setPassword("")
    }

    return (

        <>
            <div className='fixed h-screen overflow-hidden select-none'>
                <Nav />
                <div className='flex w-full h-full justify-center pt-15'>
                    <div className='border border-[#00000030] flex w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-xl shadow-[#00000070]'>

                        <div className='w-[50%] h-full flex flex-col pt-10 gap-2.5 items-center px-15'>
                            <div className=' mr-auto border rounded-full w-8 h-8 p-0.5 cursor-pointer hover:bg-gray-200'>

                                <Link to='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="19" y1="12" x2="5" y2="12" />
                                        <polyline points="12 19 5 12 12 5" />
                                    </svg>
                                </Link>
                            </div>
                            <div className=' my-1'>
                                <h1 className=' text-center text-4xl font-medium '>Join Keep Notes</h1>
                                <p className='text-xl font-normal '>Create Your Account</p>
                                {/* <p className='text-center p-1 text-red-700 border border-red-700 rounded-md text-sm font-normal '>failed to register hello hello wow ow oweir motehr chod</p> */}
                            </div>
                            <form className='flex flex-col  w-full' onSubmit={(e) => { submitHandler(e) }}>
                                <h1 className='text-lg my-2'>Name:</h1>
                                <input
                                    value={userName}
                                    onChange={(e) => { setUserName(e.target.value) }}
                                    className='border-2  rounded-xl text-lg py-2 px-3 focus:outline-none  focus:ring-0 font-medium '
                                    type="text"
                                    placeholder='Full Name' />
                                <h1 className='text-lg my-2'>Email:</h1>
                                <input
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className='border-2  rounded-xl text-lg py-2 px-3 focus:outline-none  focus:ring-0 font-medium '
                                    type="text"
                                    placeholder=' Email Address' />
                                <h1 className='text-lg my-2'>Password:</h1>
                                <input
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    className='border-2  rounded-xl text-lg py-2 px-3 focus:outline-none  focus:ring-0 font-medium '
                                    type="text"
                                    placeholder=' Strong Password' />
                                <button className='text-2xl text-white bg-primary w-fit px-6 py-2 rounded-md my-5 hover:bg-primary/80 ml-auto cursor-pointer' type='submit'>Register</button>
                            </form>
                            <div className='w-full'>
                                <p className='w-full text-left'>Already have an account? <u className='cursor-pointer hover:text-primary text-lg'><Link to='/login'>Login</Link></u></p>
                            </div>
                        </div>

                        <div className='bg-[url("/reg.jpg")] bg-cover bg-center w-[50%] h-full'>

                        </div>

                    </div>

                </div>
            </div >
        </>
    )
}

export default Signup
