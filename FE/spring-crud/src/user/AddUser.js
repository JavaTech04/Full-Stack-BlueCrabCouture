import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {
    let navigate = useNavigate()
    const [user, setUser] = useState(
        {
            phoneNumber: "",
            email: "",
            password: "",
            role: {
                id: 2,
                roleName: "User",
                createDate: "2024-04-25T17:00:00.000+00:00"
            }
        }
    )
    const { phoneNumber, email, password } = user
    const onChangeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/api/user/store", user)
        navigate("/")
    }
    return (
        <div className='container'>
            <h1>Add new user</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <div class="form-floating mb-3">
                    <input type={"email"} class="form-control" id="email" name='email' value={email} onChange={(e) => onChangeInput(e)} />
                    <label for="email">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type={"tel"} class="form-control" id="phone" name='phoneNumber' value={phoneNumber} onChange={(e) => onChangeInput(e)} />
                    <label for="phone">Phone number</label>
                </div>
                <div class="form-floating mb-3">
                    <input type={"password"} class="form-control" id="pw" name='password' value={password} onChange={(e) => onChangeInput(e)} />
                    <label for="pw">Password</label>
                </div>
                <div class="form-floating mb-3" >
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type={"radio"} name="role" id="admin" value="1" />
                        <label class="form-check-label" for="admin">Admin</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type={"radio"} name="role" id="user" value="2" />
                        <label class="form-check-label" for="user">User</label>
                    </div>
                </div>
                <button type='submit' className='btn btn-outline-success mx-2'>Submit</button>
                <Link to="/" className='btn btn-outline-danger'>Cancel</Link>
            </form>
        </div>
    )
}