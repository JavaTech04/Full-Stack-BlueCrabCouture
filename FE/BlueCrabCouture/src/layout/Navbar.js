import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src='https://capxbrand.com/assets/custom/logo.png' id='logo' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><i className="bi bi-house-fill"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/upload"><i className="bi bi-cloud-plus-fill"></i> Upload</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-people-fill"></i> User</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/user">Views</Link></li>
                                    <li><Link className="dropdown-item" to="/user/create">Create user</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-archive-fill"></i> Product</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/product">Views</Link></li>
                                    <li><Link className="dropdown-item" to="/product/create">Create product</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
