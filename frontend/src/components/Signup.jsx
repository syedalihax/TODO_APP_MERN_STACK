import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        if (userName.trim() == "" || email.trim() == "" || password == "") {
            return alert("UserName , email , password is required")
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
        <div className='bg-blue-50 fixed w-full h-full flex justify-center '>


            <div className='flex flex-col items-center border-2 border-blue-600 w-120 h-120 mt-20 rounded-2xl shadow-xl shadow-blue-500'>

                <h1 className='text-3xl mt-8 text-blue-600 font-bold'>Create Your Account</h1>

                <form className=' mt-8 w-[70%] h-fit flex gap-5 justify-between flex-col' onSubmit={(e) => { submitHandler(e) }}>
                    <input
                        className='w-full py-2 px-2 text-xl  rounded-xl border-3 border-blue-500'
                        value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}
                        type="text"
                        placeholder='User Name' />
                    <input
                        className='w-full py-2 px-2 text-xl  rounded-xl border-3 border-blue-500'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="text"
                        placeholder='Email' />
                    <input
                        className='w-full py-2 px-2 text-xl  rounded-xl border-3 border-blue-500'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type="text"
                        placeholder='Password' />

                    <button className='ml-auto text-xl text-blue-600 border-2 border-blue-500 h-fit w-fit px-8 py-2 rounded-full' type="submit">Register</button>
                </form>
                <p className='px-20 mt-5 w-full text-left text-blue-900 cursor-pointer'>have account <u className='text-blue-700 text-xl hover:font-semibold'><Link to={'/login'}>Login</Link></u> insteed</p>

            </div>

        </div>
    )
}

export default Signup
