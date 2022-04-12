import React, { useState } from 'react'


const initialState = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
}

export default function Login() {

    const [state, setState] = useState(initialState)

    // const [fullName, setFullName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        // setState(s => ({ ...s, [e.target.name]: e.target.value }))
        setState(s => ({ ...s, [name]: value }))
        // console.log("field name", e.target.name)
        // console.log("field value", e.target.value)
    }

    const handleClick = (e) => {

        e.preventDefault();

        console.log(state)
        // const { fullName, email, password, confirmPassword } = state
        // console.log(fullName)
        // console.log(email)
        // console.log(password)
        // console.log(confirmPassword)
        // console.log("fullName =>", fullName)
        // console.log("email =>", email)
        // console.log("password =>", password)
        // console.log("confirm password =>", confirmPassword)
    }

    const handleClearForm = (e) => {
        setState(initialState)

    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleClick}>

                <input type="text" placeholder='Full Name' name='fullName' value={state.fullName} onChange={handleChange} />
                <br />
                <input type="email" placeholder='Email' name='email' value={state.email} onChange={handleChange} />
                <br />
                <input type="password" placeholder='Password' name='password' value={state.password} onChange={handleChange} />
                <br />
                <input type="password" placeholder='Confirm Password' name='confirmPassword' value={state.confirmPassword} onChange={handleChange} />
                <br />

                <select name="gender" value={state.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <br />

                <input type="submit" value="Login" /> <br />

                <button onClick={handleClearForm}>Clear Form</button>
            </form>
            <a href="/reset-password">Reset Password</a>
            <h1>Login Page Ending</h1>
        </div>
    )
}
