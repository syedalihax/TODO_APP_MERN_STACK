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
        
        </>
    )
}

export default Signup
