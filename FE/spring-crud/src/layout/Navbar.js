import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Full Stack Application</a>
                    <Link className="btn btn-outline-secondary" aria-current="page" to="/add">New user</Link>
                </div>
            </nav>
        </div>
    )
}
