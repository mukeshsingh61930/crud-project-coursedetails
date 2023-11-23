import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <h1 className="navbar-brand">Full stack Application</h1>

            </div>
            <Link className="btn btn-outline-light" to="/adduser">Add user</Link>
        </nav>
    )
}

export default Navbar
