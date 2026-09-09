import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        if (email.trim() == "" || password == "") {
            return alert("email , password is required")
        }
        submitForm()
    }

    const submitForm = () => {
        console.log(email)
        console.log(password)
        setEmail("")
        setPassword("")
    }

    return (

        <>
            
        </>
    )
}

export default Login
