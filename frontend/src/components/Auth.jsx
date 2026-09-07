import { useState } from 'react'

const Auth = () => {
    const [userName, setUserName] = useState("")
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(userName)
        setUserName("")
    }
    
    return (
        <div>
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <input value={userName} onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder='Enter your User Name' />
                <button className='ml-5 bg-amber-300 text-black px-4 py-1 rounded-2xl' type="submit">Register</button>
            </form>
        </div>
    )
}

export default Auth
